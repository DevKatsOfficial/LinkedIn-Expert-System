const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employees",
    required: true
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects",
    required: true
  },
  introduction: {
    last_name: String,
    public_identifier: String,
    picture: String,
    headline: String,
    location_name: String,
    first_name: String,
    country: String,
    region: String
  },
  summary: {
    text: String
  },
  experiences: [
    {
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
      }
    }
  ],
  currentEmployer: [
    {
      company_logo: String,
      position_name: String,
      company_name: String,
      location_name: String,
      description: String,
      time_period: {
        start: {
          month: String,
          year: String
        }
      }
    }
  ],
  previousEmployees: [
    {
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
      }
    }
  ],
  educations: [
    {
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
      }
    }
  ],
  certifications: [
    {
      institute_logo: String,
      institute_name: String,
      certification_name: String
    }
  ],
  volunteer_experiences: [
    {
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
    }
  ],
  skills: [
    {
      name: String,
      endorsement_count: String
    }
  ],
  projects: [
    {
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
    }
  ],
  publications: [
    {
      name: String,
      publish_date: Date,
      description: String,
      publisher: String,
      url: String
    }
  ]
});

const CustomExpertProfile = mongoose.model("custom-expert-profiles", schema);

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
module.exports.CustomExpertProfile = CustomExpertProfile;
