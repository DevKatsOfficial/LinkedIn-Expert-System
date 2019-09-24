import config
from utilities.extract_data import get_attr_value_from_html_soup

CATEGORY_NAME = 'certifications'


def get_user_certifications_data(html_soup, identifier_data_mapping):
    user_certifications = []
    list_of_user_certifications = get_attr_value_from_html_soup(
        html_soup, config.CERTIFICATION_SECTION_SELECTORS['item_list']
    ) or []
    for user_certifications_tag in list_of_user_certifications:
        certifications_data = {
            'institute_name': get_attr_value_from_html_soup(
                user_certifications_tag, config.CERTIFICATION_SECTION_SELECTORS['item_university_name']
            ),
            'certification_name': get_attr_value_from_html_soup(
                user_certifications_tag, config.CERTIFICATION_SECTION_SELECTORS['item_certification_name']
            )
        }
        user_certifications.append(certifications_data)

    return user_certifications
