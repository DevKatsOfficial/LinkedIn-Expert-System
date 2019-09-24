import json
import traceback

import config
from utilities.extract_data import  get_nested_key_value_of_data_dict, get_vector_image_url_from_dict_data
from utilities.s3_util import upload_image_on_s3_from_url


def get_entity_urn_and_entity_data_mapping(tag_data, key_containing_entity_names=None):
    """
    Return dict containing  entity urn as key and its attribute to pick and parse mapper as value.

    Needed this method because we want to extract different attributes from different entities.
    """
    entity_names_data = tag_data.get(key_containing_entity_names, {})
    existing_entity_names_to_parse = config.ENTITY_NAME_AND_ENTITY_ATTRIBUTES_MAP.keys()
    entity_names_keys = [k for k in entity_names_data.keys() if k in existing_entity_names_to_parse]
    values_obj_mapper = {}
    for entity_name in entity_names_keys:
        # get mapper against entity name from config variable ENTITY_NAME_AND_ENTITY_ATTRIBUTES_MAP
        entity_mapper = config.ENTITY_NAME_AND_ENTITY_ATTRIBUTES_MAP.get(entity_name, None)
        # set ENTITY_NAME_AND_ENTITY_ATTRIBUTES_MAP against entity identifier
        if isinstance(entity_names_data[entity_name], (list, tuple)):
            for entity_urn in entity_names_data[entity_name]:
                values_obj_mapper[entity_urn] = entity_mapper
        else:
            values_obj_mapper[entity_names_data[entity_name]] = entity_mapper
    return values_obj_mapper


def get_entity_processed_value(entity_value, entity_attributes_map=None, remove_empty_values=True):
    """
    1. extract identifier key value and required keys values from data
    2. return tuple which contains
        a. identifier value
        b. filtered required keys data dict
    """
    entity_processed_value = {}
    if not all([entity_value, isinstance(entity_value, dict), entity_attributes_map]):
        return entity_processed_value

    attributes_to_extract = entity_attributes_map.keys()
    # filter needed attributes
    for attribute_name, attribute_value in entity_value.items():
        if attribute_name in attributes_to_extract:
            attribute_type = entity_attributes_map[attribute_name].get('type', None)
            attribute_obj_category = entity_attributes_map[attribute_name].get('obj_category', None)
            attribute_field_category = entity_attributes_map[attribute_name].get('field_category', None)
            # extracting different type of attributes value
            if attribute_type == 'nested':
                nested_attr_name = entity_attributes_map.get(attribute_name).get('nested_attr_name', '')
                attribute_value = get_nested_key_value_of_data_dict(
                    attribute_value, [nested_attr_name]
                )
                # if nested_attr_name in IMAGE_IDENTIFIER_ATTRIBUTES:
                #     attribute_value = upload_image_on_s3_from_url(attribute_value)
            elif attribute_type == 'vector_image':
                attribute_value = get_vector_image_url_from_dict_data(entity_attributes_map, attribute_name, attribute_value)

            # continue for empty values
            if not attribute_value and remove_empty_values:
                continue

            # object attribute name from mapper
            attribute_name = entity_attributes_map.get(attribute_name, {}).get('obj_attr_name', None)
            if attribute_obj_category:
                entity_processed_value[attribute_name] = attribute_value
                entity_processed_value['category'] = attribute_obj_category
            elif attribute_field_category:
                entity_processed_value[attribute_name] = {'value': attribute_value, 'category': attribute_field_category}
            else:
                entity_processed_value[attribute_name] = attribute_value

    return entity_processed_value


def set_default_map_and_return_map(entity_urn_and_entity_attributes_map, entity_identifier_value):
    """
     in order to scrap all min profiles for picture & background image, we need entity *miniProfile
     and in order to get links we need entity *treasuryMedia"""
    _entity_urn_and_entity_attributes_map = entity_urn_and_entity_attributes_map.get(entity_identifier_value, None)
    if _entity_urn_and_entity_attributes_map:
        return _entity_urn_and_entity_attributes_map
    if not _entity_urn_and_entity_attributes_map:
        for must_extract_entity in config.MUST_EXTRACT_ENTITIES:
            if must_extract_entity.get('identifier') in entity_identifier_value:
                return config.ENTITY_NAME_AND_ENTITY_ATTRIBUTES_MAP.get(must_extract_entity.get('name'), None)
    return None


def get_dict_of_entities_identifier_and_processed_value(data_tags,
                                                        key_containing_entity_values=None,
                                                        key_containing_entity_names=None,
                                                        entity_identifier=None):
    """
    1. receive beautiful soup code object array
    2. for each code obj:
        get entity_urn_and_entity_attributes_map by calling get_entity_urn_and_entity_data_mapping
        for all objects in code obj['included']:
            get entity identifier value
            get entity processed value
            set both of above in entities_identifier_and_processed_value dict as a key value pair
    3. return entities_identifier_and_processed_values dict
    """
    entities_identifier_and_processed_value = {}
    # return in case of invalid data
    if not all([data_tags, key_containing_entity_values, key_containing_entity_names, entity_identifier]):
        return entities_identifier_and_processed_value
    # iterate over list of data tags
    for obj in data_tags:
        try:
            tag_data = json.loads(obj.text)
            if tag_data.get(key_containing_entity_values, None):
                entity_urn_and_entity_attributes_map = get_entity_urn_and_entity_data_mapping(
                    tag_data, key_containing_entity_names=key_containing_entity_names
                )
                entity_values = tag_data.get(key_containing_entity_values, None) or []
                for entity_value in entity_values:
                    entity_identifier_value = entity_value.get(entity_identifier, None)
                    if entity_identifier_value:
                        _entity_urn_and_entity_attributes_map = set_default_map_and_return_map(
                            entity_urn_and_entity_attributes_map, entity_identifier_value
                        )
                        entity_processed_value = get_entity_processed_value(
                            entity_value,
                            entity_attributes_map=_entity_urn_and_entity_attributes_map,
                            remove_empty_values=True
                        )
                        if entity_processed_value:
                            entities_identifier_and_processed_value[entity_identifier_value] = entity_processed_value
        except Exception as e:
            pass
            # traceback.print_exc()
    return entities_identifier_and_processed_value


def get_data_against_identifier(html_soup, filter_tag=None, key_containing_entity_values=None, key_containing_entity_names=None, entity_identifier=None):
    data_tags = html_soup.find_all(filter_tag)
    entities_identifier_and_processed_value = get_dict_of_entities_identifier_and_processed_value(
        data_tags,
        key_containing_entity_values=key_containing_entity_values,
        key_containing_entity_names=key_containing_entity_names,
        entity_identifier=entity_identifier
    )
    return entities_identifier_and_processed_value


def process_data_obj_as_per_field_category_wise_and_add_inner_entity_data_in_entity_value(
        main_obj, main_obj_value, category, identifier_data_mapping
):
    """
    Separate data based on field category or obj category
    and if entity has key which starts with *, it means entity has another entity in it.
    in this case, we set another entity data in this entity.
    """
    obj_category = main_obj_value.get('category', None)
    if obj_category:
        if obj_category == category:
            main_obj_value.pop('category', None)
            main_obj['attached_{}'.format(category)].append(main_obj_value)
    else:
        for _k, _v in main_obj_value.items():
            if isinstance(_v, dict):
                field_category = _v.get('category', None)
                value = _v.get('value', None)
                if field_category == category:
                    _v.pop('category', None)
                    if _k.startswith('*'):
                        data = identifier_data_mapping.get(value, None)
                        if data:
                            process_data_obj_as_per_field_category_wise_and_add_inner_entity_data_in_entity_value(
                                main_obj, data, _k, identifier_data_mapping
                            )
                    else:
                        main_obj.update({_k: value})





