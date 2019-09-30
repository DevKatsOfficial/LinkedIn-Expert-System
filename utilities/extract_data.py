"""
Contains following functions:
    1. extract param from url query string
    2. extract data
"""
import re
import traceback
from collections import Iterable
from urllib import parse

from bs4 import NavigableString

import config
from utilities.s3_util import upload_image_on_s3_from_url


def get_param_from_url(url_path, param='entityUrn', value_joiner=','):
    """
    Input  ==> /in/ehsaan-israr-812991aa/detail/treasury/summary/?entityUrn=urn%3Ali%3Afs_treasuryMedia%3A(ACoAABdIME4BnswPti-HEUp2CEn-ssuW-uep0DE%2C1567860642162)&amp;section=summary&amp;treasuryCount=2
    Output ==> urn:li:fs_treasuryMedia:(ACoAABdIME4BnswPti-HEUp2CEn-ssuW-uep0DE,1567860642162)
   """
    parsed_url = parse.urlparse(url_path)
    param_value = parse.parse_qs(parsed_url.query).get(param, '')
    if isinstance(param_value, Iterable):
        param_value = value_joiner.join(param_value)
    return param_value


def get_nested_key_value_of_data_dict(data_dict, attributes_list=None):
    try:
        value = data_dict
        for attribute in attributes_list:
            value = value.get(attribute, None)
        return value
    except Exception as e:
        config.config_logger.exception('Error occurred')
        return None


def get_vector_image_url_from_dict_data(entity_name_values_mapper, main_dict_key, main_dict_key_value):
    if main_dict_key_value:
        attr_mapper = entity_name_values_mapper[main_dict_key]
        attr_name = attr_mapper.get('start_url', None)
        root_url = main_dict_key_value.get(attr_name)
        end_url_list = main_dict_key_value.get(attr_mapper.get('find_end_url', None))
        image_url = ''
        for _ in end_url_list:
            image_url = '{}{}'.format(
                root_url, _.get(attr_mapper.get('end_url_attribute', None), '')
            )
        if image_url:
            image_url = upload_image_on_s3_from_url(image_url)
        return image_url
    return ''


def get_processed_value_based_on_type(value, data_type):
    if data_type == 'image_url':
        value = upload_image_on_s3_from_url(value)
    elif data_type == 'month_year_time_range':
        try:
            start_range, end_range = value.split('–')
            start_range, end_range = start_range.strip(), end_range.strip()
            try:
                start_month, start_year = start_range.split()
            except ValueError:
                start_year = start_range
                start_month = None
            value = {
                'start': {
                    'month': start_month,
                    'year': start_year
                }
            }
            if end_range.lower() != 'present':
                try:
                    end_month, end_year = end_range.split()
                except ValueError:
                    end_year = end_range
                    end_month = None
                value.update({
                    'end': {
                        'month': end_month,
                        'year': end_year
                    }
                })
        except ValueError:
            if value.isdigit():
                value = {'year': value}
            else:
                value = {'month': value}
            value = {'start': value, 'end': value}
    elif data_type == 'year_time_range':
        value_list = value.split('–')
        if len(value_list) > 1:
            start_year, end_year = value_list[0], value_list[1]
        else:
            start_year, end_year = value_list[0], value_list[0]
        start_year, end_year = start_year.strip(), end_year.strip()
        value = {
            'start': {
                'year': start_year or None
            }
        }
        if end_year.lower() != 'present':
            value.update({
                'end': {
                    'year': end_year or None
                }
            })
    return value


def filter_tag_satisfying_child_constraints(tag_list, child_constraints):
    filtered_tags = []
    try:
        for tag in tag_list:
            if get_attr_value_from_html_soup(tag, child_constraints):
                filtered_tags.append(tag)
    except Exception as e:
        pass
    return filtered_tags


def extract_outer_text(tag, separator=''):
    if tag and tag.contents:
        values_list = []
        for tag_content in tag.contents:
            if isinstance(tag_content, NavigableString) and tag_content and tag_content.strip():
                values_list.append(tag_content.strip())
        return separator.join(values_list)
    return None


def get_attr_value_from_html_soup(html_soup, tag_details):
    if not html_soup:
        return None

    # extract tag details
    class_name = tag_details.get('class', '')
    class_regex = tag_details.get('class_regex', '')
    not_class_name = tag_details.get('not_class', '')
    tag_name = tag_details.get('tag', '')
    inner_details = tag_details.get('inner_details', None)
    fetch_elements_method = tag_details.get('fetch_method', 'find')
    attribute_to_pick = tag_details.get('attribute_to_pick', '')
    data_type = tag_details.get('type', '')
    recursive = tag_details.get('recursive', None)
    child_constraints = tag_details.get('child_constraints', '')
    last_element = tag_details.get('last_element', False)
    first_element = tag_details.get('first_element', False)
    filter_outer_text_only = tag_details.get('filter_outer_text_only', False)
    line_separator = tag_details.get('separator', '')

    # prefer class regex, if both class name & class regex exists
    class_regex = class_regex and re.compile(class_regex)
    class_name = class_regex or class_name

    argument_list = []
    if tag_name:
        argument_list.append(tag_name)
    else:
        argument_list.append(True)
    if class_name:
        argument_list.append({'class': class_name})
    kwargs = {}
    if recursive is not None:
        kwargs['recursive'] = recursive

    try:
        filtered_soup_obj = getattr(html_soup, fetch_elements_method)(*argument_list, **kwargs)
        # pick only last element
        if first_element and isinstance(filtered_soup_obj, list):
            filtered_soup_obj_list = filtered_soup_obj
            for obj in filtered_soup_obj_list:
                filtered_soup_obj = obj
                break
        elif last_element and isinstance(filtered_soup_obj, list):
            filtered_soup_obj_list = filtered_soup_obj
            for obj in filtered_soup_obj_list:
                filtered_soup_obj = obj
        if inner_details:
            return get_attr_value_from_html_soup(filtered_soup_obj, inner_details)
        # if tag does not contains child tag then does not consider this
        if child_constraints:
            filtered_soup_obj = filter_tag_satisfying_child_constraints(filtered_soup_obj, child_constraints)
        if not filtered_soup_obj:
            return None
        if filter_outer_text_only:
            filtered_soup_obj = extract_outer_text(filtered_soup_obj, separator=line_separator)
        if attribute_to_pick:
            if isinstance(filtered_soup_obj, list):
                values_list = []
                for v in filtered_soup_obj:
                    if not_class_name in v.attrs.get('class', []):
                        continue
                    values_list.append(getattr(v, attribute_to_pick, '') or getattr(v, 'attrs', {}).get(attribute_to_pick, ''))
                # ############################################## replace with \n
                value = '\n'.join(values_list)
            else:
                if attribute_to_pick == 'text':
                    # ############################################## replace with \n
                    value = filtered_soup_obj.get_text(separator='\n')
                else:
                    value = getattr(filtered_soup_obj, 'attrs', {}).get(attribute_to_pick, '') or getattr(filtered_soup_obj, attribute_to_pick, '')
            value = value and value.strip()
            try:
                return get_processed_value_based_on_type(value, data_type).encode("ascii", "ignore").decode("utf-8").replace('\n', ' ')
            except Exception:
                config.config_logger.exception('Error occurred')
                return get_processed_value_based_on_type(value, data_type)
        else:
            return filtered_soup_obj
    except Exception as e:
        config.config_logger.exception('Error occurred')


def xpath_soup(element):
    components = []
    child = element if element.name else element.parent
    for parent in child.parents:
        siblings = parent.find_all(child.name, recursive=False)
        components.append(
            child.name if siblings == [child] else '%s[%d]' % (child.name, 1 + siblings.index(child))
        )
        child = parent
    components.reverse()
    return '/%s' % '/'.join(components)
