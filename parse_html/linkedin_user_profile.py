import json
import os
import traceback
from datetime import datetime

import pymongo
import requests
from bs4 import BeautifulSoup
from bson.objectid import ObjectId
from datetime import timedelta, datetime, time as datetime_time


import config
from parse_html.certification import get_user_certifications_data
from parse_html.education import get_user_education_data
from parse_html.experience import get_user_experience_data
from parse_html.extract_data_from_html_data_tags import get_data_against_identifier
from parse_html.intro import get_user_intro_data
from parse_html.projects import get_user_projects_data
from parse_html.publications import get_user_publications_data
from parse_html.skills import get_user_skills_data
from parse_html.summary import get_user_summary_data
from parse_html.volunteer_experience import get_user_volunteer_experience_data

experts_model = config.db.experts
experts_parsed_count_model = config.db.experts_parsed_count


def insert_and_update_expert_data(expert_model_id=None, user_profile_data=None, linkedin_url=None, user_id=None):
    try:
        try:
            experts_parsed_count_model.update_one(
                {'date': datetime.combine(datetime.utcnow().today(), datetime_time())},
                {"$inc": {"count": 1}},
                upsert=True
            )
        except Exception:
            config.config_logger.exception('Error occurred on inserting count of parsed profiles')
        user_profile_data.update({
            "_id": str(expert_model_id),
            "userId": str(user_id),
            "scrap_datetime": str(user_profile_data['scrap_datetime'])
        })
        response = requests.put(url='http://13.59.139.111:5000/api/expert',
                                json=json.loads(json.dumps(user_profile_data)))
        response = response.json()
        config.config_logger.debug('For URL {}, API RESPONSE: \n {}'.format(linkedin_url, response))
    except Exception:
        config.config_logger.exception('Error occurred wile inserting parsed data in db')
        experts_model.insert_one(user_profile_data)


def parse_and_save_expert_profile(main_html='', publications_html='', projects_html='',
                                  expert_model_id=None, linkedin_url='', user_id='', **kwargs):
    config.config_logger.debug('selenium function done. Now parsing by BS4 to save in db started')
    projects_html_soup = publications_html_soup = html_soup = BeautifulSoup(main_html, "html.parser")
    if publications_html:
        publications_html_soup = BeautifulSoup(publications_html, "html.parser")
    if projects_html:
        projects_html_soup = BeautifulSoup(projects_html, "html.parser")
    entities_identifier_and_processed_value = get_data_against_identifier(
        html_soup,
        filter_tag=config.HTML_TAG_WITH_CONTAIN_JSON_DATA,
        key_containing_entity_values=config.KEY_CONTAINING_ENTITY_VALUES,
        key_containing_entity_names=config.KEY_CONTAINING_ENTITY_NAMES,
        entity_identifier=config.ENTITY_IDENTIFIER
    )
    intro = get_user_intro_data(html_soup, entities_identifier_and_processed_value, linkedin_url)
    summary = get_user_summary_data(html_soup, entities_identifier_and_processed_value)
    experiences = get_user_experience_data(html_soup, entities_identifier_and_processed_value)
    educations = get_user_education_data(html_soup, entities_identifier_and_processed_value)
    certifications = get_user_certifications_data(html_soup, entities_identifier_and_processed_value)
    volunteer_experiences = get_user_volunteer_experience_data(html_soup, entities_identifier_and_processed_value)
    skills = get_user_skills_data(html_soup, entities_identifier_and_processed_value)
    projects = get_user_projects_data(projects_html_soup, entities_identifier_and_processed_value)
    publications = get_user_publications_data(publications_html_soup, entities_identifier_and_processed_value)
    user_profile_data = {
        'introduction': intro,
        'summary': summary,
        'experiences': experiences,
        'educations': educations,
        'certifications': certifications,
        'volunteer_experiences': volunteer_experiences,
        'skills': skills,
        'projects': projects,
        'publications': publications,
        'scrap_datetime': datetime.utcnow(),
        'linkedin_url': linkedin_url
    }
    insert_and_update_expert_data(expert_model_id=expert_model_id, user_profile_data=user_profile_data, linkedin_url=linkedin_url, user_id=user_id)
