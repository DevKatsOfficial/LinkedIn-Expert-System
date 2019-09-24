import config
from utilities.extract_data import get_attr_value_from_html_soup

CATEGORY_NAME = 'skills'


def get_user_skills_data(html_soup, identifier_data_mapping):
    user_skills = []
    list_of_user_skills = get_attr_value_from_html_soup(
        html_soup, config.SKILLS_SECTION_SELECTORS['item_list']
    ) or []
    for user_skills_tag in list_of_user_skills:
        skills_data = {
            'name': get_attr_value_from_html_soup(
                user_skills_tag, config.SKILLS_SECTION_SELECTORS['item_name']
            ),
            'endorsement_count': get_attr_value_from_html_soup(
                user_skills_tag, config.SKILLS_SECTION_SELECTORS['item_endorsement_count']
            )
        }
        user_skills.append(skills_data)

    return user_skills
