const Joi = require('joi');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    introduction: {
        name: String,
        background_image: String,
        public_identifier: String,
        picture: String,
        headline: String,
        industry_name: String,
        location_name: String,
        first_name: String
    },
    summary: {
        text: String,
        attached_summary: [{
            url: String,
            description: String,
            title: String
        }]
    },
    experiences: [{
        company_logo: String,
        position_name: String,
        company_name: String,
        location_name: String,
        description: String,
        time_period: {
            start: {
                month: String,
                year: String
            },
            end: {
                month: String,
                year: String
            }
        },
        attached_details: [{
            url: String,
            description: String,
            title: String
        }]
    }],
    educations: [{
        school_logo: String,
        school_name: String,
        degree_name: String,
        field_of_study: String,
        description: String,
        degree_grade: String,
        time_period: {
            start: {
                year: String
            },
            end: {
                year: String
            }
        },
        attached_details: [{
            url: String,
            description: String,
            title: String
        }]
    }],
    certifications: [{
        institute_logo: String,
        institute_name: String,
        certification_name: String
    }],
    volunteer_experiences: [{
        organization_logo: String,
        role: String,
        organization_name: String,
        description: String,
        time_period: {
            start: {
                month: String,
                year: String
            },
            end: {
                month: String,
                year: String
            }
        },
        cause: String
    }],
    skills: [{
        name: String,
        endorsement_count: String
    }],
    projects: [{
        name: String,
        time_period: {
            start: {
                month: String
            },
            end: {
                month: String
            }
        },
        description: String,
        url: String
    }],
    publications: [{
        name: String,
        publish_date: Date,
        description: String,
        publisher: String,
        url: String

    }]

});


const Expert = mongoose.model('experts', schema);



// function validate(user) {
//     const schema = {
//         name: Joi.string().optional(),
//         email: Joi.string().email().required(),
//         password: Joi.string().required(),
//         lev: Joi.objectId(),
//         phone: Joi.string().required(),
//         linkedInUrl: Joi.string().required(),
//         projectNumber: Joi.string().required()
//     };
//     return Joi.validate(user, schema);
// }



// module.exports.validate = validate;
module.exports.Expert = Expert;
