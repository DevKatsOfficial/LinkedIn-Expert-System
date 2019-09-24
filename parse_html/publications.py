import config
from utilities.extract_data import get_attr_value_from_html_soup

CATEGORY_NAME = 'publications'


def get_user_publications_data(html_soup, identifier_data_mapping):
    user_publications = []
    list_of_user_publications = get_attr_value_from_html_soup(
        html_soup, config.PUBLICATIONS_SECTION_SELECTORS['item_list']
    ) or []
    for user_publications_tag in list_of_user_publications:
        publications_data = {
            'name': get_attr_value_from_html_soup(
                user_publications_tag, config.PUBLICATIONS_SECTION_SELECTORS['item_name']
            ),
            'publish_date': get_attr_value_from_html_soup(
                user_publications_tag, config.PUBLICATIONS_SECTION_SELECTORS['item_time_range']
            ),
            'description': get_attr_value_from_html_soup(
                user_publications_tag, config.PUBLICATIONS_SECTION_SELECTORS['item_description']
            ),
            'publisher': get_attr_value_from_html_soup(
                user_publications_tag, config.PUBLICATIONS_SECTION_SELECTORS['item_publisher']
            ),
            'url': get_attr_value_from_html_soup(
                user_publications_tag, config.PUBLICATIONS_SECTION_SELECTORS['item_link']
            )
        }
        user_publications.append(publications_data)

    return user_publications
