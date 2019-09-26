import config
from utilities.extract_data import get_attr_value_from_html_soup

CATEGORY_NAME = 'experience'


def get_user_experience_data(html_soup, identifier_data_mapping):
    user_experiences = []

    # handling of 1 position experience in one company
    list_of_user_experiences = get_attr_value_from_html_soup(
        html_soup, config.EXPERIENCE_SECTION_SELECTORS['item_list']
    ) or []
    for user_experience_tag in list_of_user_experiences:
        experience_data = {
            'position_name': get_attr_value_from_html_soup(
                user_experience_tag, config.EXPERIENCE_SECTION_SELECTORS['item_position_name']
            ),
            'company_name': get_attr_value_from_html_soup(
                user_experience_tag, config.EXPERIENCE_SECTION_SELECTORS['item_company_name']
            ),
            'location_name': get_attr_value_from_html_soup(
                user_experience_tag, config.EXPERIENCE_SECTION_SELECTORS['item_location_name']
            ),
            'description': get_attr_value_from_html_soup(
                user_experience_tag, config.EXPERIENCE_SECTION_SELECTORS['item_description']
            ),
            'time_period': get_attr_value_from_html_soup(
                user_experience_tag, config.EXPERIENCE_SECTION_SELECTORS['item_time_range']
            ),
            # 'attached_details': []
        }
        # removing partial data which come if user experience is at different posts in same company
        if not all([experience_data['company_name'], experience_data['position_name']]):
            continue

        # attached_links_list
        # attached_details = get_attr_value_from_html_soup(
        #     user_experience_tag, config.EXPERIENCE_SECTION_SELECTORS['attached_links_list']
        # ) or []
        # for attached_detail in attached_details:
        #     _url = attached_detail.attrs.get('href')
        #     entity_identifier_value = get_param_from_url(_url, param=config.ENTITY_IDENTIFIER)
        #     attached_data = identifier_data_mapping.get(entity_identifier_value, None)
        #     if attached_data:
        #         experience_data['attached_details'].append(attached_data)
        user_experiences.append(experience_data)

    # handling for multiple position experience in same company
    list_of_user_same_company_multiple_positions_list = get_attr_value_from_html_soup(
        html_soup, config.EXPERIENCE_SECTION_SELECTORS['same_company_multiple_positions_list']
    ) or []
    for user_experience_tag in list_of_user_same_company_multiple_positions_list:
        same_company_experience_list = get_attr_value_from_html_soup(
            user_experience_tag, config.EXPERIENCE_SECTION_SELECTORS['same_company_experience_list']
        ) or []
        for same_company_experience in same_company_experience_list:
            experience_data = {
                'company_name': get_attr_value_from_html_soup(
                    user_experience_tag, config.EXPERIENCE_SECTION_SELECTORS['item_company_name']
                ),
                'description': get_attr_value_from_html_soup(
                    same_company_experience, config.EXPERIENCE_SECTION_SELECTORS['same_company_description']
                ),
                'location_name': get_attr_value_from_html_soup(
                    same_company_experience, config.EXPERIENCE_SECTION_SELECTORS['same_company_location_name']
                ),
                # 'attached_details': [],
                # these two should be on the basis of same_company_experience
                'position_name': get_attr_value_from_html_soup(
                    same_company_experience, config.EXPERIENCE_SECTION_SELECTORS['same_company_position_name']
                ),
                'time_period': get_attr_value_from_html_soup(
                    same_company_experience, config.EXPERIENCE_SECTION_SELECTORS['same_company_time_range']
                )
            }
            # removing partial data which come if user experience is at different posts in same company
            if not all([experience_data['company_name'], experience_data['position_name']]):
                continue

            # attached_links_list
            # attached_details = get_attr_value_from_html_soup(
            #     user_experience_tag, config.EXPERIENCE_SECTION_SELECTORS['attached_links_list']
            # ) or []
            # for attached_detail in attached_details:
            #     _url = attached_detail.attrs.get('href')
            #     entity_identifier_value = get_param_from_url(_url, param=config.ENTITY_IDENTIFIER)
            #     attached_data = identifier_data_mapping.get(entity_identifier_value, None)
            #     if attached_data:
            #         experience_data['attached_details'].append(attached_data)
            user_experiences.append(experience_data)
    return user_experiences
