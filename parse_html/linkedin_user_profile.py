import os
from datetime import datetime

from bs4 import BeautifulSoup
from bson.objectid import ObjectId

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


def parse_and_save_expert_profile(main_html='', publications_html='', projects_html='',
                                  expert_model_id=None, linkedin_url='', **kwargs):
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
    try:
        if not expert_model_id:
            raise ValueError()
        if isinstance(expert_model_id, str):
            expert_model_id = ObjectId(expert_model_id)
        experts_model.update_one({"_id": expert_model_id}, {"$set": user_profile_data})
    except Exception:
        experts_model.insert_one(user_profile_data)
