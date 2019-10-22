import json
import os
import traceback
from datetime import datetime

import pymongo
import requests
from bs4 import BeautifulSoup
from bson.json_util import dumps
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
a = {'linkedin_url': '', 'user_id': None, 'scrap_datetime': '2019-10-06 21:32:51.354087', 'introduction': {'first_name': 'edward', 'last_name': 'schleichert', 'picture': '', 'location_name': 'Munich Area, Germany', 'headline': 'Global Product Business Manager - Hot Stamping at Magna Cosma', 'public_identifier': 'ACoAABeJ8z4B8Y8ejAv-V2QnyuvD5l6UW33xeCk'}, 'summary': {'text': None}, 'experiences': [{'time_period': {'start': {'month': 'Apr', 'year': '2000'}, 'end': {'month': 'Dec', 'year': '2001'}}, '_id': ObjectId('5d93a3cb4288737e6b5cb2c6'), 'position_name': 'Freelance Consultant', 'company_name': 'Schleichert Consulting', 'location_name': 'Germany', 'description': None}, {'time_period': {'start': {'month': 'Nov', 'year': '1996'}, 'end': {'month': 'Mar', 'year': '2000'}}, '_id': ObjectId('5d93a3cb4288737e6b5cb2c5'), 'position_name': 'General Manager, Owner', 'company_name': 'TTG Werkzeugbau & Stanztechnik GmbH', 'location_name': 'Heilbad Heiligenstadt, Germany', 'description': None}, {'time_period': {'start': {'month': 'Nov', 'year': '1992'}, 'end': {'month': 'Oct', 'year': '1996'}}, '_id': ObjectId('5d93a3cb4288737e6b5cb2c4'), 'position_name': 'Tool Room Manager', 'company_name': 'Magna International Stanztechnik GmbH', 'location_name': 'Heilbad Heiligenstadt, Germany', 'description': None}, {'time_period': {'start': {'month': 'Sep', 'year': '1990'}, 'end': {'month': 'Aug', 'year': '1992'}}, '_id': ObjectId('5d93a3cb4288737e6b5cb2c3'), 'position_name': 'Production management and tooling maintenance', 'company_name': 'Electric Terminal Corporation of Canada Ltd.', 'location_name': 'Markham, Ontario, Canada', 'description': None}, {'time_period': {'start': {'month': 'Sep', 'year': '1988'}, 'end': {'month': 'Aug', 'year': '1990'}}, '_id': ObjectId('5d93a3cb4288737e6b5cb2c2'), 'position_name': 'Tool & Die Maker', 'company_name': 'Master Precision Tool & Die Ltd.', 'location_name': 'Scarborough, Ontario, Canada', 'description': None}, {'time_period': {'start': {'month': 'Jun', 'year': '2016'}}, '_id': ObjectId('5d93a3cb4288737e6b5cb2c1'), 'company_name': 'Magna Cosma', 'description': None, 'location_name': None, 'position_name': 'Global Product Business Manager - Hot Stamping'}, {'time_period': {'start': {'month': 'Jan', 'year': '2015'}, 'end': {'month': 'May', 'year': '2016'}}, '_id': ObjectId('5d93a3cb4288737e6b5cb2c0'), 'company_name': 'Magna Cosma', 'description': None, 'location_name': None, 'position_name': 'Senior Manager Ideation & Innovation'}, {'time_period': {'start': {'month': 'Jan', 'year': '2010'}, 'end': {'month': 'Dec', 'year': '2014'}}, '_id': ObjectId('5d93a3cb4288737e6b5cb2bf'), 'company_name': 'Magna Cosma', 'description': None, 'location_name': None, 'position_name': 'Senior Manager Technology'}, {'time_period': {'start': {'month': 'Mar', 'year': '2008'}, 'end': {'month': 'Dec', 'year': '2009'}}, '_id': ObjectId('5d93a3cb4288737e6b5cb2be'), 'company_name': 'Magna Cosma', 'description': None, 'location_name': None, 'position_name': 'Team Leader Body in White'}, {'time_period': {'start': {'month': 'Jan', 'year': '2002'}, 'end': {'month': 'Feb', 'year': '2008'}}, '_id': ObjectId('5d93a3cb4288737e6b5cb2bd'), 'company_name': 'Magna Cosma', 'description': None, 'location_name': None, 'position_name': 'Customer Lead - Advanced Engineering'}], 'educations': [], 'certifications': [], 'volunteer_experiences': [], 'skills': [{'_id': ObjectId('5d93a3cb4288737e6b5cb2bc'), 'name': 'Microsoft Office', 'endorsement_count': '2'}, {'_id': ObjectId('5d93a3cb4288737e6b5cb2bb'), 'name': 'Management', 'endorsement_count': '1'}, {'_id': ObjectId('5d93a3cb4288737e6b5cb2ba'), 'name': 'Microsoft Excel', 'endorsement_count': '1'}], 'projects': [], 'publications': [], 'userId': 'None'}


def format_fields_and_remove_id_fields(expert_model_data):
    data = {}
    for k, v in expert_model_data.items():
        if k == "_id": continue
        if isinstance(v, dict):
            data[k] = format_fields_and_remove_id_fields(v)
        elif isinstance(v ,list):
            data[k] = []
            for index, list_item in enumerate(v):
                if isinstance(list_item, dict):
                    _data = format_fields_and_remove_id_fields(list_item)
                    data[k].append(_data)
        elif k in ["userId", "scrap_datetime"]:
            data[k] = str(v)
        else:
            data[k] = v
    return data


def update_scrap_date_in_expert_model(expert_model_data):
    expert_model_data = expert_model_data or {}
    linkedin_url = expert_model_data.get('introduction', {}).get('linkedin_url', '')
    expert_model_data.update({
        'scrap_datetime': datetime.utcnow(),
        'linkedin_url': linkedin_url
    })
    insert_and_update_expert_data(
        expert_model_id=expert_model_data.get('_id', ''),
        user_profile_data=expert_model_data,
        linkedin_url=linkedin_url,
        user_id=expert_model_data.get('userId')
    )


def is_user_summary_updated(main_html, expert_model_obj):
    config.config_logger.debug('checking for user summary updated or not')
    html_soup = BeautifulSoup(main_html, "html.parser")
    old_intro = expert_model_obj.get('introduction', {})
    linkedin_url = expert_model_obj.get('linkedin_url')
    intro = get_user_intro_data(html_soup, None, linkedin_url)
    return old_intro.get('headline', '').lower().strip() != intro.get('headline', '').lower().strip()


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
        user_profile_data = format_fields_and_remove_id_fields(user_profile_data)
        response = requests.put(url='http://18.219.83.43:5000/api/expert',
                                json=user_profile_data)
        response = response.json()
        config.config_logger.debug('For URL {}, API RESPONSE: \n {}'.format(linkedin_url, response))
    except Exception:
        config.config_logger.exception('Error occurred wile inserting parsed data in db')
        experts_model.update({"_id": expert_model_id}, {"$set":user_profile_data})


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
