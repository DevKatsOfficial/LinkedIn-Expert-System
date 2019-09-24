import config
from utilities.extract_data import get_attr_value_from_html_soup, get_param_from_url

CATEGORY_NAME = 'education'


def get_user_education_data(html_soup, identifier_data_mapping):
    user_educations = []

    # handling of 1 position education in one company
    list_of_user_educations = get_attr_value_from_html_soup(
        html_soup, config.EDUCATION_SECTION_SELECTORS['item_list']
    ) or []
    for user_education_tag in list_of_user_educations:
        education_data = {
            'school_name': get_attr_value_from_html_soup(
                user_education_tag, config.EDUCATION_SECTION_SELECTORS['item_university_name']
            ),
            'degree_name': get_attr_value_from_html_soup(
                user_education_tag, config.EDUCATION_SECTION_SELECTORS['item_degree_name']
            ),
            'field_of_study': get_attr_value_from_html_soup(
                user_education_tag, config.EDUCATION_SECTION_SELECTORS['item_field_of_study']
            ),
            'description': get_attr_value_from_html_soup(
                user_education_tag, config.EDUCATION_SECTION_SELECTORS['item_description']
            ),
            'degree_grade': get_attr_value_from_html_soup(
                user_education_tag, config.EDUCATION_SECTION_SELECTORS['item_degree_grade']
            ),
            'time_period': get_attr_value_from_html_soup(
                user_education_tag, config.EDUCATION_SECTION_SELECTORS['item_time_range']
            ),
            # 'attached_details': []
        }
        # # attached_links_list
        # attached_details = get_attr_value_from_html_soup(
        #     user_education_tag, config.EDUCATION_SECTION_SELECTORS['attached_links_list']
        # ) or []
        # for attached_detail in attached_details:
        #     _url = attached_detail.attrs.get('href')
        #     entity_identifier_value = get_param_from_url(_url, param=config.ENTITY_IDENTIFIER)
        #     attached_data = identifier_data_mapping.get(entity_identifier_value, None)
        #     if attached_data:
        #         education_data['attached_details'].append(attached_data)
        user_educations.append(education_data)

    return user_educations
