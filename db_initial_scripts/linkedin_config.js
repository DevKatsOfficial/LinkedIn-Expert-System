
db.linkedin_config.insert(
    {
        name: "ENTITY_NAME_AND_ENTITY_ATTRIBUTES_MAP",
        value: {
            "*summaryTreasuryMedias": {
                "customTitle": {"obj_attr_name": "title", "obj_category": "summary"},
                "customDescription": {"obj_attr_name": "description", "obj_category": "summary"},
                "providerName": {"obj_attr_name": "provider_name", "obj_category": "summary"},
                "data": {"nested_attr_name": "url", "obj_attr_name": "url", "type": "nested", "obj_category": "summary"},
            },
            "*treasuryMedia": {
                "customTitle": {"obj_attr_name": "title"},
                "customDescription": {"obj_attr_name": "description"},
                "providerName": {"obj_attr_name": "provider_name"},
                "data": {"nested_attr_name": "url", "obj_attr_name": "url", "type": "nested"},
            },
            "*profile": {
                "firstName": {"obj_attr_name": "first_name", "field_category": "profile"},
                "lastName": {"obj_attr_name": "last_name", "field_category": "profile"},
                "industryName": {"obj_attr_name": "industry_name", "field_category": "profile"},
                "summary": {"obj_attr_name": "text", "field_category": "summary"},
                "headline": {"obj_attr_name": "headline", "field_category": "profile"},
                "locationName": {"obj_attr_name": "location_name", "field_category": "profile"},
                "*miniProfile": {"obj_attr_name": "*miniProfile", "field_category": "profile"},

            },
            "*miniProfile": {
                "publicIdentifier": {"obj_attr_name": "public_identifier", "field_category": "*miniProfile"},
                "picture": {"obj_attr_name": "picture", "type": "vector_image", "field_category": "*miniProfile",
                            "start_url": "rootUrl", "find_end_url": "artifacts", "end_url_attribute": "fileIdentifyingUrlPathSegment"},
            }
        }
    }
)

db.linkedin_config.insert(
    {
        name: "HTML_TAG_WITH_CONTAIN_JSON_DATA",
        value: "code"
    }
)
db.linkedin_config.insert(
    {
        name: "KEY_CONTAINING_ENTITY_VALUES",
        value: "included"
    }
)
db.linkedin_config.insert(
    {
        name: "KEY_CONTAINING_ENTITY_NAMES",
        value: "data"
    }
)
db.linkedin_config.insert(
    {
        name: "ENTITY_IDENTIFIER",
        value: "entityUrn"
    }
)
db.linkedin_config.insert(
    {
        name: "MINI_PROFILE_IDENTIFIER",
        value: "miniProfile"
    }
)
db.linkedin_config.insert(
    {
        name: "MUST_EXTRACT_ENTITIES",
        value: [{"name": "*miniProfile", "identifier": "miniProfile:"},
                         {"name": "*treasuryMedia", "identifier": "treasuryMedia:"}]
    }
)
db.linkedin_config.insert(
    {
        name: "IMAGE_IDENTIFIER_ATTRIBUTES",
        value: ["url", "image_url"]
    }
)
db.linkedin_config.insert(
    {
        name: "AWS_ACCESS_KEY",
        value: "AKIAJ5ELHWO7YLBDXT3Q"
    }
)
db.linkedin_config.insert(
    {
        name: "AWS_SECRET_KEY",
        value: "qPXgq7YL9IzBtWcbq1ch6V4XMcgvwV8cXzQjPGR3"
    }
)
db.linkedin_config.insert(
    {
        name: "SKILLS_SECTION_SELECTORS",
        value: {
            "item_list": {"tag": "section", "class": "pv-skill-categories-section", "fetch_method": "find",
                          "inner_details": {"class": "pv-skill-category-entity", "fetch_method": "find_all"}
                          },
            "item_name": {"class": "pv-skill-category-entity__name-text", "fetch_method": "find", "type": "text", "attribute_to_pick": "text", "not_class": "visually-hidden"},
            "item_endorsement_count": {"class": "pv-skill-category-entity__endorsement-count", "fetch_method": "find", "type": "text", "attribute_to_pick": "text", "not_class": "visually-hidden"}
        }
    }
)
db.linkedin_config.insert(
    {
        name: "CERTIFICATION_SECTION_SELECTORS",
        value:  {
            "item_list": {"tag": "li", "class": "pv-certification-entity", "fetch_method": "find_all"},
            "item_university_logo": {"class": "pv-entity__logo", "fetch_method": "find",
                                     "inner_details": {"attribute_to_pick": "src", "type": "image_url",
                                                       "fetch_method": "find"}},
            "item_university_name": {"class": "pv-entity__logo", "fetch_method": "find",
                                     "inner_details": {"attribute_to_pick": "alt", "type": "_text", "fetch_method": "find"}},
            "item_certification_name": {"class": "pv-certifications__summary-info", "fetch_method": "find",
                                        "inner_details": {"tag": "h3", "fetch_method": "find", "type": "text",
                                                          "attribute_to_pick": "text"}}
        }
    }
)
db.linkedin_config.insert(
    {
        name: "EDUCATION_SECTION_SELECTORS",
        value: {
            "item_list": {"tag": "section", "class": "education-section", "fetch_method": "find",
                          "inner_details": {"tag": "ul", "class": "pv-profile-section__section-info", "fetch_method": "find",
                                            "inner_details": {"tag": "li", "fetch_method": "find_all"}
                                            }
                          },
            "item_university_logo": {"class": "pv-entity__logo", "fetch_method": "find",
                                  "inner_details": {"attribute_to_pick": "src", "type": "image_url", "fetch_method": "find"}},
            "item_university_name": {"class": "pv-entity__logo", "fetch_method": "find",
                                  "inner_details": {"attribute_to_pick": "alt", "type": "_text", "fetch_method": "find"}},
            "item_degree_name": {"class": "pv-entity__degree-name", "fetch_method": "find",
                                   "inner_details": {"tag": "span", "fetch_method": "find_all", "type": "text", "attribute_to_pick": "text", "not_class": "visually-hidden"}},
            "item_field_of_study": {"class": "pv-entity__fos", "fetch_method": "find",
                                   "inner_details": {"tag": "span", "fetch_method": "find_all", "type": "text", "attribute_to_pick": "text", "not_class": "visually-hidden"}},
            "item_degree_grade": {"class": "pv-entity__grade", "fetch_method": "find",
                                   "inner_details": {"tag": "span", "fetch_method": "find_all", "type": "text", "attribute_to_pick": "text", "not_class": "visually-hidden"}},
            "item_time_range": {"class": "pv-entity__dates", "fetch_method": "find",
                                "inner_details": {"tag": "span", "not_class": "visually-hidden", "type": "year_time_range",  "fetch_method": "find_all", "attribute_to_pick": "text"}
                               },
            "item_description": {"class": "pv-entity__description", "fetch_method": "find", "type": "text", "attribute_to_pick": "text"},
            "attached_links_list": {"class": "pv-treasury-carousel__tap-target", "type": "treasury_item", "fetch_method": "find_all"}
        }
    }
)
db.linkedin_config.insert(
    {
        name: "PUBLICATIONS_SECTION_SELECTORS",
        value: {
            "item_list": {"tag": "section", "class": "publications", "fetch_method": "find",
                          "inner_details": {"class": "pv-accomplishment-entity", "fetch_method": "find_all"}
                          },
            "item_name": {"class": "pv-accomplishment-entity__title", "fetch_method": "find", "filter_outer_text_only": true},
            "item_link": {"class": "pv-accomplishment-entity__external-source", "fetch_method": "find", "attribute_to_pick": "href", "type": "_text"},
            "item_time_range": {"class": "pv-accomplishment-entity__date", "fetch_method": "find",  "filter_outer_text_only": true},
            "item_publisher": {"class": "pv-accomplishment-entity__publisher", "fetch_method": "find", "filter_outer_text_only": true, "separator": "\n"},
            "item_description": {"class": "pv-accomplishment-entity__description", "fetch_method": "find", "filter_outer_text_only": true, "separator": "\n"},
            "section": {"tag": "section", "class": "publications", "fetch_method": "find"},
            "expand_button": {"tag": "button", "class": "pv-accomplishments-block__expand", "fetch_method": "find"}
        }
    }
)
db.linkedin_config.insert(
    {
        name: "PROJECTS_SECTION_SELECTORS",
        value: {
            "item_list": {"tag": "section", "class": "projects", "fetch_method": "find",
                          "inner_details": {"class": "pv-accomplishment-entity", "fetch_method": "find_all"}
                          },
            "item_name": {"class": "pv-accomplishment-entity__title", "fetch_method": "find", "filter_outer_text_only": true},
            "item_link": {"class": "pv-accomplishment-entity__external-source", "fetch_method": "find", "attribute_to_pick": "href", "type": "_text"},
            "item_time_range": {"class": "pv-accomplishment-entity__date", "fetch_method": "find",  "type": "month_year_time_range",  "attribute_to_pick": "text"},
            "item_description": {"class": "pv-accomplishment-entity__description", "fetch_method": "find", "filter_outer_text_only": true, "separator": "\n"},
            "section": {"tag": "section", "class": "projects", "fetch_method": "find"},
            "expand_button": {"tag": "button", "class": "pv-accomplishments-block__expand", "fetch_method": "find"}
        }
    }
)
db.linkedin_config.insert(
    {
        name: "VOLUNTEER_EXPERIENCE_SECTION_SELECTORS",
        value: {
            "item_list": {"tag": "section", "class": "volunteering-section", "fetch_method": "find",
                          "inner_details": {"tag": "ul", "class": "pv-profile-section__section-info", "fetch_method": "find",
                                            "inner_details": {"fetch_method": "find_all", "class": "pv-volunteering-entity"}
                                            }
                          },
            "item_company_logo": {"class": "pv-entity__logo", "fetch_method": "find",
                                  "inner_details": {"attribute_to_pick": "src", "type": "image_url", "fetch_method": "find"}},
            "item_company_name": {"class": "pv-entity__logo", "fetch_method": "find",
                                  "inner_details": {"attribute_to_pick": "alt", "type": "_text", "fetch_method": "find"}},
            "item_role": {"class": "pv-entity__summary-info", "fetch_method": "find",
                                   "inner_details": {"fetch_method": "find", "type": "text", "attribute_to_pick": "text", "not_class": "visually-hidden"}},
            "item_cause": {"class": "pv-entity__cause", "fetch_method": "find",
                                   "inner_details": {"fetch_method": "find_all", "type": "_text", "attribute_to_pick": "text", "not_class": "visually-hidden"}},
            "item_time_range": {"class": "pv-entity__date-range", "fetch_method": "find",
                                "inner_details": {"tag": "span", "not_class": "visually-hidden", "type": "month_year_time_range",  "fetch_method": "find_all", "attribute_to_pick": "text"}
                               },
            "item_description": {"class": "pv-entity__description", "fetch_method": "find", "type": "text", "attribute_to_pick": "text"}
        }
    }
)

db.linkedin_config.insert(
    {
        name: "EXPERIENCE_SECTION_SELECTORS",
        value: {
            "item_list": {"tag": "section", "class": "experience-section", "fetch_method": "find",
                          "inner_details": {"tag": "ul", "class": "pv-profile-section__section-info", "fetch_method": "find",
                                            "inner_details": {"tag": "li", "fetch_method": "find_all", "class": "pv-position-entity"}
                                            }
                          },
            "same_company_multiple_positions_list": {"tag": "section", "class": "experience-section", "fetch_method": "find",
                                                     "inner_details": {"tag": "ul", "class": "pv-profile-section__section-info",
                                                                       "fetch_method": "find",
                                                                       "inner_details": {"tag": "li",
                                                                                         "fetch_method": "find_all",
                                                                                         "class": "pv-position-entity",
                                                                                         "child_constraints": {"class": "pv-entity__position-group", "tag": "ul", "fetch_method": "find"}
                                                                                         }
                                                                       }
                                                     },
            "same_company_experience_list": {"class": "pv-entity__position-group", "tag": "ul", "fetch_method": "find",
                                             "inner_details": {"class": "pv-entity__position-group-role-item", "fetch_method": "find_all"}},
            "item_company_logo": {"class": "company-logo", "fetch_method": "find",
                                  "inner_details": {"attribute_to_pick": "src", "type": "image_url", "fetch_method": "find"}},
            "item_company_name": {"class": "company-logo", "fetch_method": "find",
                                  "inner_details": {"attribute_to_pick": "alt", "type": "_text", "fetch_method": "find"}},
            "item_position_name": {"class": "pv-entity__summary-info", "fetch_method": "find",
                                   "inner_details": {"tag": "h3", "fetch_method": "find", "type": "text", "attribute_to_pick": "text"}},
            "same_company_position_name": {"class_regex": "^pv-entity__summary-info*", "fetch_method": "find",
                                            "inner_details": {"tag": "h3", "fetch_method": "find",
                                                              "inner_details": {"tag": "span", "not_class": "visually-hidden", "type": "text",  "fetch_method": "find_all", "attribute_to_pick": "text"}}},
            "item_location_name": {"class": "pv-entity__summary-info", "fetch_method": "find",
                                  "inner_details": {"class": "pv-entity__location", "fetch_method": "find",
                                                    "inner_details": {"tag": "span", "not_class": "visually-hidden", "type": "text",  "fetch_method": "find_all", "attribute_to_pick": "text"}
                                                    }
                                   },
            "item_time_range": {"class": "pv-entity__date-range", "fetch_method": "find",
                                "inner_details": {"tag": "span", "not_class": "visually-hidden", "type": "month_year_time_range",  "fetch_method": "find_all", "attribute_to_pick": "text"}
                               },
            "same_company_time_range": {"class": "pv-entity__date-range", "fetch_method": "find",
                                        "inner_details": {"tag": "span", "not_class": "visually-hidden", "type": "month_year_time_range",  "fetch_method": "find_all", "attribute_to_pick": "text"}
                                       },
            "same_company_location_name": {"class": "pv-entity__location", "fetch_method": "find",
                                        "inner_details": {"tag": "span", "not_class": "visually-hidden", "type": "text",  "fetch_method": "find_all", "attribute_to_pick": "text"}
                                       },
            "same_company_description": {"class": "pv-entity__description", "fetch_method": "find",
                                        "inner_details": {"tag": "span", "not_class": "lt-line-clamp__ellipsis", "type": "text",
                                                          "fetch_method": "find_all", "attribute_to_pick": "text"}
                                        },
            "item_description": {"class": "pv-entity__description", "fetch_method": "find",
                                 "inner_details": {"tag": "span", "class": "lt-line-clamp__raw-line", "fetch_method": "find", "type": "text", "attribute_to_pick": "text"}},
            "attached_links_list": {"class": "pv-treasury-list-preview__treasury-item-link", "type": "treasury_item", "fetch_method": "find_all"}
        }
    }
)
db.linkedin_config.insert(
    {
        name: "ORIGIN_SITE_LOGIN_URL",
        value: "https://www.linkedin.com/uas/login"
    }
)
db.linkedin_config.insert(
    {
        name: "USERNAME",
        value: "Umerjutt333@gmail.com"
    }
)
db.linkedin_config.insert(
    {
        name: "PASSWORD",
        value: "12340987"
    }
)
db.linkedin_config.insert(
    {
        name: "PROFILE_INTRO_SECTION_SELECTORS",
        value: {
            "summary_text": {
                "tag": "section", "class": "pv-about-section", "fetch_method": "find",
                "inner_details": {
                    "class": "pv-about__summary-text", "fetch_method": "find",
                    "inner_details": {
                        "tag": "span", "fetch_method": "find_all", "type": "text", "attribute_to_pick": "text",
                        "not_class": "lt-line-clamp__ellipsis",
                    }
                }
            },
            "intro_selector": {
                "tag": "section", "class": "pv-top-card-v3", "fetch_method": "find",
                "inner_details": {
                    "tag": "div", "fetch_method": "find_all", "last_element": true, "class": "display-flex",
                    "inner_details": {
                        "tag": "div", "fetch_method": "find_all", "first_element": true, "recursive": false
                    }
                }
            },
            "user_full_name": {
                "tag": "ul", "first_element": true, "class": "pv-top-card-v3--list", "fetch_method": "find_all",
                "inner_details": {
                    "tag": "li", "fetch_method": "find_all", "first_element": true, "recursive": false, "type": "text", "attribute_to_pick": "text"
                }
            },
            "user_location": {
                "tag": "ul", "last_element": true, "class": "pv-top-card-v3--list", "fetch_method": "find_all",
                "inner_details": {
                    "tag": "li", "fetch_method": "find_all", "first_element": true, "recursive": false, "type": "text", "attribute_to_pick": "text"
                }
            },
            "headline": {
                "tag": "h2", "type": "text", "attribute_to_pick": "text", "recursive": false
            },
            "user_image": {
                "tag": "section", "class": "pv-top-card-v3", "fetch_method": "find",
                "inner_details": {
                    "tag": "img", "class": "presence-entity__image", "attribute_to_pick": "src", "type": "image_url"
                }
            }
        }
    }
)