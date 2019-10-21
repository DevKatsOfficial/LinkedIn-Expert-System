const express = require("express");
const router = express.Router();
const expertController = require("../controllers/expertController");
const authMiddleware = require("../../../middlewares/authMiddlewares");

/**
 * @apiGroup Expert
 * @api {post} /api/expert/create Create Custom Expert Profile
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {ObjectId} projectId required
 * @apiSuccess {Object} introduction
 * @apiSuccess {String} introduction.first_name
 * @apiSuccess {String} introduction.last_name
 * @apiSuccess {String} introduction.public_identifier
 * @apiSuccess {String} introduction.picture
 * @apiSuccess {String} introduction.headline
 * @apiSuccess {String} introduction.location_name
 * @apiSuccess {String} introduction.country
 * @apiSuccess {String} introduction.region
 * @apiSuccess {String} summary
 * @apiSuccess {Array} experiences
 * @apiSuccess {String} experiences.company_logo
 * @apiSuccess {String} experiences.position_name
 * @apiSuccess {String} experiences.location_name
 * @apiSuccess {String} experiences.description
 * @apiSuccess {Object} experiences.time_period
 * @apiSuccess {Object} experiences.time_period.start
 * @apiSuccess {String} experiences.time_period.start.month
 * @apiSuccess {String} experiences.time_period.start.year
 * @apiSuccess {Object} experiences.time_period.end
 * @apiSuccess {String} experiences.time_period.end.month
 * @apiSuccess {String} experiences.time_period.end.year
 * @apiSuccess {Array}  currentEmployer
 * @apiSuccess {String}  currentEmployer.company_logo
 * @apiSuccess {String}  currentEmployer.position_name
 * @apiSuccess {String}  currentEmployer.company_name
 * @apiSuccess {String}  currentEmployer.location_name
 * @apiSuccess {String}  currentEmployer.description
 * @apiSuccess {String}  currentEmployer.company_logo
 * @apiSuccess {Object} currentEmployer.time_period
 * @apiSuccess {Object} currentEmployer.time_period.start
 * @apiSuccess {String} currentEmployer.time_period.start.month
 * @apiSuccess {String} currentEmployer.time_period.start.year
 * @apiSuccess {Array}  previousEmployees
 * @apiSuccess {String}  previousEmployees.company_logo
 * @apiSuccess {String}  previousEmployees.position_name
 * @apiSuccess {String}  previousEmployees.company_name
 * @apiSuccess {String}  previousEmployees.location_name
 * @apiSuccess {String}  previousEmployees.description
 * @apiSuccess {Object} previousEmployees.time_period
 * @apiSuccess {Object} previousEmployees.time_period.start
 * @apiSuccess {String} previousEmployees.time_period.start.month
 * @apiSuccess {String} previousEmployees.time_period.start.year
 * @apiSuccess {Object} previousEmployees.time_period.end
 * @apiSuccess {String} previousEmployees.time_period.end.month
 * @apiSuccess {String} previousEmployees.time_period.end.year
 * @apiSuccess {Array}  educations
 * @apiSuccess {String}  educations.school_logo
 * @apiSuccess {String}  educations.school_name
 * @apiSuccess {String}  educations.degree_name
 * @apiSuccess {String}  educations.field_of_study
 * @apiSuccess {String}  educations.description
 * @apiSuccess {String}  educations.degree_grade
 * @apiSuccess {Object} educations.time_period
 * @apiSuccess {Object} educations.time_period.start
 * @apiSuccess {String} educations.time_period.start.year
 * @apiSuccess {Object} educations.time_period.end
 * @apiSuccess {String} educations.time_period.end.year
 * @apiSuccess {Array}  certifications
 * @apiSuccess {String}  certifications.institute_logo
 * @apiSuccess {String}  certifications.institute_name
 * @apiSuccess {String}  certifications.certification_name
 * @apiSuccess {Array}  volunteer_experiences
 * @apiSuccess {String}  volunteer_experiences.organization_logo
 * @apiSuccess {String}  volunteer_experiences.role
 * @apiSuccess {String}  volunteer_experiences.organization_name
 * @apiSuccess {String}  volunteer_experiences.description
 * @apiSuccess {String}  volunteer_experiences.cause
 * @apiSuccess {Object} volunteer_experiences.time_period
 * @apiSuccess {Object} volunteer_experiences.time_period.start
 * @apiSuccess {String} volunteer_experiences.time_period.start.month
 * @apiSuccess {String} volunteer_experiences.time_period.start.year
 * @apiSuccess {Object} volunteer_experiences.time_period.end
 * @apiSuccess {String} volunteer_experiences.time_period.end.month
 * @apiSuccess {String} volunteer_experiences.time_period.end.year
 * @apiSuccess {Array}  skills
 * @apiSuccess {String}  skills.name
 * @apiSuccess {String}  skills.endorsement_count
 * @apiSuccess {Array}  projects
 * @apiSuccess {String}  projects.name
 * @apiSuccess {String}  projects.description
 * @apiSuccess {String}  projects.url
 * @apiSuccess {Object} projects.time_period
 * @apiSuccess {Object} projects.time_period.start
 * @apiSuccess {String} projects.time_period.start.month
 * @apiSuccess {Object} projects.time_period.end
 * @apiSuccess {String} projects.time_period.end.month
 * @apiSuccess {Array}  publications
 * @apiSuccess {String}  publications.name
 * @apiSuccess {Date}  publications.publish_date
 * @apiSuccess {String}  publications.description
 * @apiSuccess {String}  publications.publisher
 * @apiSuccess {String}  publications.url
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *         "message": "Successfully Created Custom Profile!..."
 *     }
 */
router.post("/create", authMiddleware.Auth, expertController.create);

/**
 * @apiGroup Expert
 * @api {post} /api/expert/getByProject/customProfile Get Custom Expert Profile By Project
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {ObjectId} projectId required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *        {
 *            "introduction": {
 *                "first_name": "Ehsaan",
 *                "last_name": "Israr",
 *                "picture": "",
 *                "location_name": "Lahore, Pakistan",
 *                "country": "Pakistan",
 *                "headline": "Full Stack Developer",
 *                "region": "asia",
 *                "public_identifier": "ehsaan-israr-812991aa"
 *            },
 *            "summary": {
 *                "text": "An innovative thinker, initiative taker and multi dimensional professional with exceptional logical and analytical skills with ability to Implement new ideas in a wide variety of business applications, use new technologies and develop        applications with eye catching features."
 *            },
 *            "_id": "5da9a1751c98c72a58900a6d",
 *            "employeeId": "5da991368d78ff7f3fbbb85f",
 *            "projectId": "5da1e4df1562722830f697fc",
 *            "experiences": [
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "month": "Apr",
 *                            "year": "2018"
 *                        },
 *                        "end": {
 *                            "month": "Jun",
 *                            "year": "2019"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a6e",
 *                    "position_name": "Full Stack Developer",
 *                    "company_name": "xiQ, Inc.",
 *                    "location_name": "Pakistan",
 *                    "description": "xiQ Inc. is Account based marketing (ABM) Company. This product help companies to curate, personalize and publish contents to mobile apps (iphone, ipad and android), web apps , salesforce app and email in minutes. It also provide user management, contacts management, reports module and dashboards module.  Following are some of the majors on which I worked on in python/django project:  Added campaign management tool  Added contact list management tool  Added customize user permissions system  Added logging system  Added personalization of email  Sending and scheduling of emails  Added different highcharts in dashboards"
 *                }
 *            ],
 *            "educations": [
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2018"
 *                        },
 *                        "end": {
 *                            "year": "2018"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a73",
 *                    "school_name": "PUCIT",
 *                    "degree_name": "nasn",
 *                    "field_of_study": "Business Administration and Management, General",
 *                    "description": "Located in the heart of Lahore, neighboring the buzzing Anarkali Bazar and the Mall Road, PUCIT is the largest institution of higher learning in Pakistan in Computer Science, Information Technology, and Software Engineering. The College took a modest...",
 *                    "degree_grade": "3.0/4.0"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2013"
 *                        },
 *                        "end": {
 *                            "year": "2015"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a72",
 *                    "school_name": "University of the Punjab, Lahore",
 *                    "degree_name": "Master in Computer Science",
 *                    "field_of_study": "CS",
 *                    "description": "Providing a high level Enviroment of Learning",
 *                    "degree_grade": "3.57 cgpa"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2011"
 *                        },
 *                        "end": {
 *                            "year": "2013"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a71",
 *                    "school_name": "Govt. Dyal Singh College,Lahore",
 *                    "degree_name": "Bachelor's degree",
 *                    "field_of_study": "E-Commerce",
 *                    "description": "Gather the wisdom of east and west",
 *                    "degree_grade": "Ist Division"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2009"
 *                        },
 *                        "end": {
 *                            "year": "2011"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a70",
 *                    "school_name": "Govt. Shalimar College,Lahore",
 *                    "degree_name": "Associates Degree",
 *                    "field_of_study": "Pre-Engineering",
 *                    "description": "Nice Institute",
 *                    "degree_grade": "Ist Division"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2007"
 *                        },
 *                        "end": {
 *                            "year": "2009"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a6f",
 *                    "school_name": "P.R High School,Lahore",
 *                    "degree_name": "High School",
 *                    "field_of_study": "Science",
 *                    "description": "Nice Institute with nice teachers",
 *                    "degree_grade": "Ist Division"
 *                }
 *            ],
 *            "certifications": [
 *                {
 *                    "_id": "5da9a1751c98c72a58900a74",
 *                    "institute_name": "https://acloud.guru",
 *                    "certification_name": "Introduction to AWS"
 *                }
 *            ],
 *            "volunteer_experiences": [
 *                {
 *                    "_id": "5da9a1751c98c72a58900a75",
 *                    "role": "Mentor",
 *                    "organization_name": "Django Girls",
 *                    "description": "I served a day with Django Girls Event at ITU as a Mentor. Django Girls organize free Python and Django workshops, create open sourced online tutorials and curate amazing first experiences with technology.",
 *                    "cause": "Science and Technology"
 *                }
 *            ],
 *            "skills": [
 *                {
 *                    "_id": "5da9a1751c98c72a58900a7a",
 *                    "name": "Python",
 *                    "endorsement_count": "8"
 *                },
 *                {
 *                    "_id": "5da9a1751c98c72a58900a79",
 *                    "name": "Django",
 *                    "endorsement_count": "8"
 *                },
 *                {
 *                    "_id": "5da9a1751c98c72a58900a78",
 *                    "name": "MySQL",
 *                    "endorsement_count": "10"
 *                },
 *                {
 *                    "_id": "5da9a1751c98c72a58900a77",
 *                    "name": "boto",
 *                    "endorsement_count": "5"
 *                },
 *                {
 *                    "_id": "5da9a1751c98c72a58900a76",
 *                    "name": "CKEditor",
 *                    "endorsement_count": "4"
 *                }
 *            ],
 *            "projects": [
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "month": "Jan"
 *                        },
 *                        "end": {
 *                            "month": "Jan"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a7c",
 *                    "name": "Online Job Shop",
 *                    "description": "Tools and Technologies:: C#,WebRTC,Asp.Net,SignalR,Visual Studio 2013\nDescription::\nAn web application, providing complete replacement of manual job system.Employer can post job and job seeker can apply to that job.Employer take the Interview fortheir final selection.\nFeatures:\n•\tUser can create and manage his account.\n•       Employer can create and manage Job\n•\tJob seeker can create or upload his C.V.\n•       Job Seeker can Apply to job\n•\tEmployer can Interview the selected Job Seeker.\n•\tJob Seeker and Employer can search for Jobs and Job Seeker respectively.",
 *                    "url": null
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "month": "Apr 2015"
 *                        },
 *                        "end": {
 *                            "month": "Apr 2015"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a7b",
 *                    "name": "One to One Video Call",
 *                    "description": "Tools and Techniques:: C# , ASP.NET , WebRTC , Alertify , SignalR , Visual Studio 2013\nDescription::\nIt uses the chrome WebRTC API for one to one video call means you noting have to install and for Signalling it uses the  SignalR  API.WebRTC is written in javascript  core level and giving a high quality of video streaming.you do not need a space for video streaming.",
 *                    "url": null
 *                }
 *            ],
 *            "publications": [],
 *            "currentEmployer": [],
 *            "previousEmployees": [],
 *            "__v": 0
 *        },
 *        {
 *            "introduction": {
 *                "first_name": "Zubair",
 *                "last_name": "Arif",
 *                "picture": "",
 *                "country": "Pakistan",
 *                "region": "asia",
 *                "location_name": "Lahore, Pakistan",
 *                "headline": "Full Stack Developer",
 *                "public_identifier": "ehsaan-israr-812991aa"
 *            },
 *            "summary": {
 *                "text": "An innovative thinker, initiative taker and multi dimensional professional with exceptional logical and analytical skills with ability to Implement new ideas in a wide variety of business applications, use new technologies and develop        applications with eye catching features."
 *            },
 *            "_id": "5da9a20d1c98c72a58900a7d",
 *            "employeeId": "5da991368d78ff7f3fbbb85f",
 *            "projectId": "5da1e4df1562722830f697fc",
 *            "experiences": [
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "month": "Apr",
 *                            "year": "2018"
 *                        },
 *                        "end": {
 *                            "month": "Jun",
 *                            "year": "2019"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a7e",
 *                    "position_name": "Full Stack Developer",
 *                    "company_name": "xiQ, Inc.",
 *                    "location_name": "Pakistan",
 *                    "description": "xiQ Inc. is Account based marketing (ABM) Company. This product help companies to curate, personalize and publish contents to mobile apps (iphone, ipad and android), web apps , salesforce app and email in minutes. It also provide user management, contacts management, reports module and dashboards module.  Following are some of the majors on which I worked on in python/django project:  Added campaign management tool  Added contact list management tool  Added customize user permissions system  Added logging system  Added personalization of email  Sending and scheduling of emails  Added different highcharts in dashboards"
 *                }
 *            ],
 *            "educations": [
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2018"
 *                        },
 *                        "end": {
 *                            "year": "2018"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a83",
 *                    "school_name": "PUCIT",
 *                    "degree_name": "nasn",
 *                    "field_of_study": "Business Administration and Management, General",
 *                    "description": "Located in the heart of Lahore, neighboring the buzzing Anarkali Bazar and the Mall Road, PUCIT is the largest institution of higher learning in Pakistan in Computer Science, Information Technology, and Software Engineering. The College took a modest...",
 *                    "degree_grade": "3.0/4.0"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2013"
 *                        },
 *                        "end": {
 *                            "year": "2015"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a82",
 *                    "school_name": "University of the Punjab, Lahore",
 *                    "degree_name": "Master in Computer Science",
 *                    "field_of_study": "CS",
 *                    "description": "Providing a high level Enviroment of Learning",
 *                    "degree_grade": "3.57 cgpa"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2011"
 *                        },
 *                        "end": {
 *                            "year": "2013"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a81",
 *                    "school_name": "Govt. Dyal Singh College,Lahore",
 *                    "degree_name": "Bachelor's degree",
 *                    "field_of_study": "E-Commerce",
 *                    "description": "Gather the wisdom of east and west",
 *                    "degree_grade": "Ist Division"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2009"
 *                        },
 *                        "end": {
 *                            "year": "2011"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a80",
 *                    "school_name": "Govt. Shalimar College,Lahore",
 *                    "degree_name": "Associates Degree",
 *                    "field_of_study": "Pre-Engineering",
 *                    "description": "Nice Institute",
 *                    "degree_grade": "Ist Division"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2007"
 *                        },
 *                        "end": {
 *                            "year": "2009"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a7f",
 *                    "school_name": "P.R High School,Lahore",
 *                    "degree_name": "High School",
 *                    "field_of_study": "Science",
 *                    "description": "Nice Institute with nice teachers",
 *                    "degree_grade": "Ist Division"
 *                }
 *            ],
 *            "certifications": [
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a84",
 *                    "institute_name": "https://acloud.guru",
 *                    "certification_name": "Introduction to AWS"
 *                }
 *            ],
 *            "volunteer_experiences": [
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a85",
 *                    "role": "Mentor",
 *                    "organization_name": "Django Girls",
 *                    "description": "I served a day with Django Girls Event at ITU as a Mentor. Django Girls organize free Python and Django workshops, create open sourced online tutorials and curate amazing first experiences with technology.",
 *                    "cause": "Science and Technology"
 *                }
 *            ],
 *            "skills": [
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a8a",
 *                    "name": "Python",
 *                    "endorsement_count": "8"
 *                },
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a89",
 *                    "name": "Django",
 *                    "endorsement_count": "8"
 *                },
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a88",
 *                    "name": "MySQL",
 *                    "endorsement_count": "10"
 *                },
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a87",
 *                    "name": "boto",
 *                    "endorsement_count": "5"
 *                },
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a86",
 *                    "name": "CKEditor",
 *                    "endorsement_count": "4"
 *                }
 *            ],
 *            "projects": [
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "month": "Jan"
 *                        },
 *                        "end": {
 *                            "month": "Jan"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a8c",
 *                    "name": "Online Job Shop",
 *                    "description": "Tools and Technologies:: C#,WebRTC,Asp.Net,SignalR,Visual Studio 2013\nDescription::\nAn web application, providing complete replacement of manual job system.Employer can post job and job seeker can apply to that job.Employer take the Interview fortheir final selection.\nFeatures:\n•\tUser can create and manage his account.\n•       Employer can create and manage Job\n•\tJob seeker can create or upload his C.V.\n•       Job Seeker can Apply to job\n•\tEmployer can Interview the selected Job Seeker.\n•\tJob Seeker and Employer can search for Jobs and Job Seeker respectively.",
 *                    "url": null
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "month": "Apr 2015"
 *                        },
 *                        "end": {
 *                            "month": "Apr 2015"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a8b",
 *                    "name": "One to One Video Call",
 *                    "description": "Tools and Techniques:: C# , ASP.NET , WebRTC , Alertify , SignalR , Visual Studio 2013\nDescription::\nIt uses the chrome WebRTC API for one to one video call means you noting have to install and for Signalling it uses the  SignalR  API.WebRTC is written in javascript  core level and giving a high quality of video streaming.you do not need a space for video streaming.",
 *                    "url": null
 *                }
 *            ],
 *            "publications": [],
 *            "currentEmployer": [],
 *            "previousEmployees": [],
 *            "__v": 0
 *        }
 *    ]
 */

router.post(
  "/getByProject/customProfile",
  authMiddleware.Auth,
  expertController.getCustomProfileOfExpertByProjectId
);

/**
 * @apiGroup Expert
 * @api {get} /api/expert/:expertId Get Expert Profile
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiParam {ObjectId} expertId required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *        {
 *            "introduction": {
 *                "first_name": "Ehsaan",
 *                "last_name": "Israr",
 *                "picture": "",
 *                "location_name": "Lahore, Pakistan",
 *                "country": "Pakistan",
 *                "headline": "Full Stack Developer",
 *                "region": "asia",
 *                "public_identifier": "ehsaan-israr-812991aa"
 *            },
 *            "summary": {
 *                "text": "An innovative thinker, initiative taker and multi dimensional professional with exceptional logical and analytical skills with ability to Implement new ideas in a wide variety of business applications, use new technologies and develop        applications with eye catching features."
 *            },
 *            "_id": "5da9a1751c98c72a58900a6d",
 *            "employeeId": "5da991368d78ff7f3fbbb85f",
 *            "projectId": "5da1e4df1562722830f697fc",
 *            "experiences": [
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "month": "Apr",
 *                            "year": "2018"
 *                        },
 *                        "end": {
 *                            "month": "Jun",
 *                            "year": "2019"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a6e",
 *                    "position_name": "Full Stack Developer",
 *                    "company_name": "xiQ, Inc.",
 *                    "location_name": "Pakistan",
 *                    "description": "xiQ Inc. is Account based marketing (ABM) Company. This product help companies to curate, personalize and publish contents to mobile apps (iphone, ipad and android), web apps , salesforce app and email in minutes. It also provide user management, contacts management, reports module and dashboards module.  Following are some of the majors on which I worked on in python/django project:  Added campaign management tool  Added contact list management tool  Added customize user permissions system  Added logging system  Added personalization of email  Sending and scheduling of emails  Added different highcharts in dashboards"
 *                }
 *            ],
 *            "educations": [
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2018"
 *                        },
 *                        "end": {
 *                            "year": "2018"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a73",
 *                    "school_name": "PUCIT",
 *                    "degree_name": "nasn",
 *                    "field_of_study": "Business Administration and Management, General",
 *                    "description": "Located in the heart of Lahore, neighboring the buzzing Anarkali Bazar and the Mall Road, PUCIT is the largest institution of higher learning in Pakistan in Computer Science, Information Technology, and Software Engineering. The College took a modest...",
 *                    "degree_grade": "3.0/4.0"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2013"
 *                        },
 *                        "end": {
 *                            "year": "2015"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a72",
 *                    "school_name": "University of the Punjab, Lahore",
 *                    "degree_name": "Master in Computer Science",
 *                    "field_of_study": "CS",
 *                    "description": "Providing a high level Enviroment of Learning",
 *                    "degree_grade": "3.57 cgpa"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2011"
 *                        },
 *                        "end": {
 *                            "year": "2013"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a71",
 *                    "school_name": "Govt. Dyal Singh College,Lahore",
 *                    "degree_name": "Bachelor's degree",
 *                    "field_of_study": "E-Commerce",
 *                    "description": "Gather the wisdom of east and west",
 *                    "degree_grade": "Ist Division"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2009"
 *                        },
 *                        "end": {
 *                            "year": "2011"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a70",
 *                    "school_name": "Govt. Shalimar College,Lahore",
 *                    "degree_name": "Associates Degree",
 *                    "field_of_study": "Pre-Engineering",
 *                    "description": "Nice Institute",
 *                    "degree_grade": "Ist Division"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2007"
 *                        },
 *                        "end": {
 *                            "year": "2009"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a6f",
 *                    "school_name": "P.R High School,Lahore",
 *                    "degree_name": "High School",
 *                    "field_of_study": "Science",
 *                    "description": "Nice Institute with nice teachers",
 *                    "degree_grade": "Ist Division"
 *                }
 *            ],
 *            "certifications": [
 *                {
 *                    "_id": "5da9a1751c98c72a58900a74",
 *                    "institute_name": "https://acloud.guru",
 *                    "certification_name": "Introduction to AWS"
 *                }
 *            ],
 *            "volunteer_experiences": [
 *                {
 *                    "_id": "5da9a1751c98c72a58900a75",
 *                    "role": "Mentor",
 *                    "organization_name": "Django Girls",
 *                    "description": "I served a day with Django Girls Event at ITU as a Mentor. Django Girls organize free Python and Django workshops, create open sourced online tutorials and curate amazing first experiences with technology.",
 *                    "cause": "Science and Technology"
 *                }
 *            ],
 *            "skills": [
 *                {
 *                    "_id": "5da9a1751c98c72a58900a7a",
 *                    "name": "Python",
 *                    "endorsement_count": "8"
 *                },
 *                {
 *                    "_id": "5da9a1751c98c72a58900a79",
 *                    "name": "Django",
 *                    "endorsement_count": "8"
 *                },
 *                {
 *                    "_id": "5da9a1751c98c72a58900a78",
 *                    "name": "MySQL",
 *                    "endorsement_count": "10"
 *                },
 *                {
 *                    "_id": "5da9a1751c98c72a58900a77",
 *                    "name": "boto",
 *                    "endorsement_count": "5"
 *                },
 *                {
 *                    "_id": "5da9a1751c98c72a58900a76",
 *                    "name": "CKEditor",
 *                    "endorsement_count": "4"
 *                }
 *            ],
 *            "projects": [
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "month": "Jan"
 *                        },
 *                        "end": {
 *                            "month": "Jan"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a7c",
 *                    "name": "Online Job Shop",
 *                    "description": "Tools and Technologies:: C#,WebRTC,Asp.Net,SignalR,Visual Studio 2013\nDescription::\nAn web application, providing complete replacement of manual job system.Employer can post job and job seeker can apply to that job.Employer take the Interview fortheir final selection.\nFeatures:\n•\tUser can create and manage his account.\n•       Employer can create and manage Job\n•\tJob seeker can create or upload his C.V.\n•       Job Seeker can Apply to job\n•\tEmployer can Interview the selected Job Seeker.\n•\tJob Seeker and Employer can search for Jobs and Job Seeker respectively.",
 *                    "url": null
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "month": "Apr 2015"
 *                        },
 *                        "end": {
 *                            "month": "Apr 2015"
 *                        }
 *                    },
 *                    "_id": "5da9a1751c98c72a58900a7b",
 *                    "name": "One to One Video Call",
 *                    "description": "Tools and Techniques:: C# , ASP.NET , WebRTC , Alertify , SignalR , Visual Studio 2013\nDescription::\nIt uses the chrome WebRTC API for one to one video call means you noting have to install and for Signalling it uses the  SignalR  API.WebRTC is written in javascript  core level and giving a high quality of video streaming.you do not need a space for video streaming.",
 *                    "url": null
 *                }
 *            ],
 *            "publications": [],
 *            "currentEmployer": [],
 *            "previousEmployees": [],
 *            "__v": 0
 *        },
 *        {
 *            "introduction": {
 *                "first_name": "Zubair",
 *                "last_name": "Arif",
 *                "picture": "",
 *                "country": "Pakistan",
 *                "region": "asia",
 *                "location_name": "Lahore, Pakistan",
 *                "headline": "Full Stack Developer",
 *                "public_identifier": "ehsaan-israr-812991aa"
 *            },
 *            "summary": {
 *                "text": "An innovative thinker, initiative taker and multi dimensional professional with exceptional logical and analytical skills with ability to Implement new ideas in a wide variety of business applications, use new technologies and develop        applications with eye catching features."
 *            },
 *            "_id": "5da9a20d1c98c72a58900a7d",
 *            "employeeId": "5da991368d78ff7f3fbbb85f",
 *            "projectId": "5da1e4df1562722830f697fc",
 *            "experiences": [
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "month": "Apr",
 *                            "year": "2018"
 *                        },
 *                        "end": {
 *                            "month": "Jun",
 *                            "year": "2019"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a7e",
 *                    "position_name": "Full Stack Developer",
 *                    "company_name": "xiQ, Inc.",
 *                    "location_name": "Pakistan",
 *                    "description": "xiQ Inc. is Account based marketing (ABM) Company. This product help companies to curate, personalize and publish contents to mobile apps (iphone, ipad and android), web apps , salesforce app and email in minutes. It also provide user management, contacts management, reports module and dashboards module.  Following are some of the majors on which I worked on in python/django project:  Added campaign management tool  Added contact list management tool  Added customize user permissions system  Added logging system  Added personalization of email  Sending and scheduling of emails  Added different highcharts in dashboards"
 *                }
 *            ],
 *            "educations": [
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2018"
 *                        },
 *                        "end": {
 *                            "year": "2018"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a83",
 *                    "school_name": "PUCIT",
 *                    "degree_name": "nasn",
 *                    "field_of_study": "Business Administration and Management, General",
 *                    "description": "Located in the heart of Lahore, neighboring the buzzing Anarkali Bazar and the Mall Road, PUCIT is the largest institution of higher learning in Pakistan in Computer Science, Information Technology, and Software Engineering. The College took a modest...",
 *                    "degree_grade": "3.0/4.0"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2013"
 *                        },
 *                        "end": {
 *                            "year": "2015"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a82",
 *                    "school_name": "University of the Punjab, Lahore",
 *                    "degree_name": "Master in Computer Science",
 *                    "field_of_study": "CS",
 *                    "description": "Providing a high level Enviroment of Learning",
 *                    "degree_grade": "3.57 cgpa"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2011"
 *                        },
 *                        "end": {
 *                            "year": "2013"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a81",
 *                    "school_name": "Govt. Dyal Singh College,Lahore",
 *                    "degree_name": "Bachelor's degree",
 *                    "field_of_study": "E-Commerce",
 *                    "description": "Gather the wisdom of east and west",
 *                    "degree_grade": "Ist Division"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2009"
 *                        },
 *                        "end": {
 *                            "year": "2011"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a80",
 *                    "school_name": "Govt. Shalimar College,Lahore",
 *                    "degree_name": "Associates Degree",
 *                    "field_of_study": "Pre-Engineering",
 *                    "description": "Nice Institute",
 *                    "degree_grade": "Ist Division"
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "year": "2007"
 *                        },
 *                        "end": {
 *                            "year": "2009"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a7f",
 *                    "school_name": "P.R High School,Lahore",
 *                    "degree_name": "High School",
 *                    "field_of_study": "Science",
 *                    "description": "Nice Institute with nice teachers",
 *                    "degree_grade": "Ist Division"
 *                }
 *            ],
 *            "certifications": [
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a84",
 *                    "institute_name": "https://acloud.guru",
 *                    "certification_name": "Introduction to AWS"
 *                }
 *            ],
 *            "volunteer_experiences": [
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a85",
 *                    "role": "Mentor",
 *                    "organization_name": "Django Girls",
 *                    "description": "I served a day with Django Girls Event at ITU as a Mentor. Django Girls organize free Python and Django workshops, create open sourced online tutorials and curate amazing first experiences with technology.",
 *                    "cause": "Science and Technology"
 *                }
 *            ],
 *            "skills": [
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a8a",
 *                    "name": "Python",
 *                    "endorsement_count": "8"
 *                },
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a89",
 *                    "name": "Django",
 *                    "endorsement_count": "8"
 *                },
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a88",
 *                    "name": "MySQL",
 *                    "endorsement_count": "10"
 *                },
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a87",
 *                    "name": "boto",
 *                    "endorsement_count": "5"
 *                },
 *                {
 *                    "_id": "5da9a20d1c98c72a58900a86",
 *                    "name": "CKEditor",
 *                    "endorsement_count": "4"
 *                }
 *            ],
 *            "projects": [
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "month": "Jan"
 *                        },
 *                        "end": {
 *                            "month": "Jan"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a8c",
 *                    "name": "Online Job Shop",
 *                    "description": "Tools and Technologies:: C#,WebRTC,Asp.Net,SignalR,Visual Studio 2013\nDescription::\nAn web application, providing complete replacement of manual job system.Employer can post job and job seeker can apply to that job.Employer take the Interview fortheir final selection.\nFeatures:\n•\tUser can create and manage his account.\n•       Employer can create and manage Job\n•\tJob seeker can create or upload his C.V.\n•       Job Seeker can Apply to job\n•\tEmployer can Interview the selected Job Seeker.\n•\tJob Seeker and Employer can search for Jobs and Job Seeker respectively.",
 *                    "url": null
 *                },
 *                {
 *                    "time_period": {
 *                        "start": {
 *                            "month": "Apr 2015"
 *                        },
 *                        "end": {
 *                            "month": "Apr 2015"
 *                        }
 *                    },
 *                    "_id": "5da9a20d1c98c72a58900a8b",
 *                    "name": "One to One Video Call",
 *                    "description": "Tools and Techniques:: C# , ASP.NET , WebRTC , Alertify , SignalR , Visual Studio 2013\nDescription::\nIt uses the chrome WebRTC API for one to one video call means you noting have to install and for Signalling it uses the  SignalR  API.WebRTC is written in javascript  core level and giving a high quality of video streaming.you do not need a space for video streaming.",
 *                    "url": null
 *                }
 *            ],
 *            "publications": [],
 *            "currentEmployer": [],
 *            "previousEmployees": [],
 *            "__v": 0
 *        }
 *    ]
 */

router.get("/:expertId", authMiddleware.Auth, expertController.getExpert);

/**
 * @apiGroup Expert
 * @api {post} /api/expert/get/project Get Projects By Expert
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {ObjectId} expertId required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *         "_id": "5da31494ea4fe2248865008f",
 *         "employeeId": {
 *             "_id": "5da0ef84d0eb9d13acce5c92",
 *             "name": "zubair",
 *             "email": "zubairsaif@gmail.com",
 *             "__v": 0
 *         },
 *         "experts": [
 *             {
 *                 "_id": "5da31494ea4fe22488650090",
 *                 "expertId": "5d8a91949e470a24404d2d9e"
 *             }
 *         ],
 *         "projectId": {
 *             "createdAt": "2019-10-12T21:39:59.671Z",
 *             "_id": "5da314812769ff18544e0e94",
 *             "projectName": "test project",
 *             "projectCode": " testcode",
 *             "projectNumber": "wde123",
 *             "projectOwner": "xzxxzzx",
 *             "projectteam": " canda",
 *             "clientId": "5da1a19a0334311b24a44836",
 *             "employeeId": "5da0ef84d0eb9d13acce5c92",
 *             "clientContacts": [
 *                 {
 *                     "_id": "5da25108850e0e210c9fae9d",
 *                     "name": "zubair saif",
 *                     "email": "zubairsaif@yandex.com"
 *                 }
 *             ],
 *             "projectStatus": true,
 *             "__v": 0
 *         },
 *         "__v": 0
 *     },
 *     {
 *         "_id": "5da393e8f6b725278c5571db",
 *         "employeeId": {
 *             "_id": "5da0ef84d0eb9d13acce5c92",
 *             "name": "zubair",
 *             "email": "zubairsaif@gmail.com",
 *             "__v": 0
 *         },
 *         "experts": [
 *             {
 *                 "_id": "5da393e8f6b725278c5571dc",
 *                 "expertId": "5d8a91949e470a24404d2d9e"
 *             }
 *         ],
 *         "projectId": {
 *             "createdAt": "2019-10-13T20:06:35.135Z",
 *             "_id": "5da38a67ce9f5635104c2ad7",
 *             "projectName": "Air share",
 *             "projectCode": "131362ZK",
 *             "projectNumber": "131362",
 *             "projectOwner": "Zubair saif",
 *             "projectteam": "Pakistan",
 *             "clientId": "5da1a17a0334311b24a44832",
 *             "employeeId": "5da0ef84d0eb9d13acce5c92",
 *             "description": "This project for document sharing",
 *             "clientContacts": [],
 *             "projectStatus": true,
 *             "__v": 0
 *         },
 *         "__v": 0
 *     }
 * ]
 */

router.post(
  "/get/project",
  authMiddleware.Auth,
  expertController.getProjectByExpert
);

/**
 * @apiGroup Expert
 * @api {post} /api/expert/search Search Expert
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {String} first_name
 * @apiSuccess {String} last_name
 * @apiSuccess {String} country
 * @apiSuccess {String} region
 * @apiSuccess {String} previousCompany
 * @apiSuccess {String} currentCompany
 * @apiSuccess {String} find 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 */

router.post("/search",
  authMiddleware.Auth,
  expertController.SearchExpert);

router.put("/", expertController.update);

router.post(
  "/create/region",
  authMiddleware.Auth,
  authMiddleware.AdminAuth,
  expertController.createRegion
);

router.post(
  "/create/countries",
  authMiddleware.Auth,
  authMiddleware.AdminAuth,
  expertController.createCountries
);

router.post(
  "/create/states",
  authMiddleware.Auth,
  authMiddleware.AdminAuth,
  expertController.createStates
);

router.post(
  "/create/cities",
  authMiddleware.Auth,
  authMiddleware.AdminAuth,
  expertController.createCities
);

module.exports = router;
