# from collections import defaultdict
#
# from parse_html.extract_data_from_html_data_tags import process_data_obj_as_per_field_category_wise_and_add_inner_entity_data_in_entity_value
#
# CATEGORY_NAME = "profile"
#
#
# def get_user_intro_from_extracted_tag_data(html_soup, identifier_data_mapping):
#     user_intro = defaultdict(list)
#     for k, v in identifier_data_mapping.items():
#         process_data_obj_as_per_field_category_wise_and_add_inner_entity_data_in_entity_value(
#             user_intro, v, CATEGORY_NAME, identifier_data_mapping
#         )
#     return user_intro
import os

import config
from utilities.extract_data import get_attr_value_from_html_soup

CATEGORY_NAME = "profile"


def get_user_intro_data(html_soup, identifier_data_mapping, linkedin_url):
    intro_selector = get_attr_value_from_html_soup(
        html_soup, config.PROFILE_INTRO_SECTION_SELECTORS["intro_selector"]
    )
    user_full_name = get_attr_value_from_html_soup(
        intro_selector, config.PROFILE_INTRO_SECTION_SELECTORS["user_full_name"]
    )
    headline = get_attr_value_from_html_soup(
        intro_selector, config.PROFILE_INTRO_SECTION_SELECTORS["headline"]
    )
    user_location = get_attr_value_from_html_soup(
        intro_selector, config.PROFILE_INTRO_SECTION_SELECTORS["user_location"]
    )

    intro_data = {
        "first_name": " ".join(user_full_name.split()[:1]),
        "last_name": " ".join(user_full_name.split()[1:]),
        "picture": get_attr_value_from_html_soup(
            html_soup, config.PROFILE_INTRO_SECTION_SELECTORS["user_image"]
        ),
        "location_name": user_location,
        "headline": headline,
        "public_identifier": os.path.basename(linkedin_url.strip().strip('/'))
    }
    return intro_data
