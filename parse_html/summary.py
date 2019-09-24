import config
from utilities.extract_data import get_attr_value_from_html_soup

CATEGORY_NAME = 'summary'


def get_user_summary_data(html_soup, identifier_data_mapping):
    summary_data = {
        'text': get_attr_value_from_html_soup(
            html_soup, config.PROFILE_INTRO_SECTION_SELECTORS['summary_text']
        )
    }
    return summary_data
