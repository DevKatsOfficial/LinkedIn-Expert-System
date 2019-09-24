import config
from utilities.extract_data import get_attr_value_from_html_soup

CATEGORY_NAME = 'projects'


def get_user_projects_data(html_soup, identifier_data_mapping):
    user_projects = []
    list_of_user_projects = get_attr_value_from_html_soup(
        html_soup, config.PROJECTS_SECTION_SELECTORS['item_list']
    ) or []
    for user_projects_tag in list_of_user_projects:
        projects_data = {
            'name': get_attr_value_from_html_soup(
                user_projects_tag, config.PROJECTS_SECTION_SELECTORS['item_name']
            ),
            'time_period': get_attr_value_from_html_soup(
                user_projects_tag, config.PROJECTS_SECTION_SELECTORS['item_time_range']
            ),
            'description': get_attr_value_from_html_soup(
                user_projects_tag, config.PROJECTS_SECTION_SELECTORS['item_description']
            ),
            'url': get_attr_value_from_html_soup(
                user_projects_tag, config.PROJECTS_SECTION_SELECTORS['item_link']
            ),

        }
        user_projects.append(projects_data)

    return user_projects
