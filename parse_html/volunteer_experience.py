from collections import defaultdict

import config
from utilities.extract_data import get_attr_value_from_html_soup, get_param_from_url

CATEGORY_NAME = 'volunteer_experience'


def get_user_volunteer_experience_data(html_soup, identifier_data_mapping):
    user_volunteer_experiences = []

    # handling of 1 position volunteer_experience in one company
    list_of_user_volunteer_experiences = get_attr_value_from_html_soup(
        html_soup, config.VOLUNTEER_EXPERIENCE_SECTION_SELECTORS['item_list']
    ) or []
    for user_volunteer_experience_tag in list_of_user_volunteer_experiences:
        volunteer_experience_data = {
            'role': get_attr_value_from_html_soup(
                user_volunteer_experience_tag, config.VOLUNTEER_EXPERIENCE_SECTION_SELECTORS['item_role']
            ),
            'organization_name': get_attr_value_from_html_soup(
                user_volunteer_experience_tag, config.VOLUNTEER_EXPERIENCE_SECTION_SELECTORS['item_company_name']
            ),
            'description': get_attr_value_from_html_soup(
                user_volunteer_experience_tag, config.VOLUNTEER_EXPERIENCE_SECTION_SELECTORS['item_description']
            ),
            'time_period': get_attr_value_from_html_soup(
                user_volunteer_experience_tag, config.VOLUNTEER_EXPERIENCE_SECTION_SELECTORS['item_time_range']
            ),
            'cause': get_attr_value_from_html_soup(
                user_volunteer_experience_tag, config.VOLUNTEER_EXPERIENCE_SECTION_SELECTORS['item_cause']
            )
        }
        user_volunteer_experiences.append(volunteer_experience_data)
    return user_volunteer_experiences
