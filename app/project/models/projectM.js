const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },
  projectCode: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  projectNumber: {
    type: String,
    required: true
  },
  projectOwner: {
    type: String,
    required: true
  },
  projectteam: {
    type: String,
    required: true
  },
  clientContacts: [
    {
      email: { type: String, required: true },
      name: { type: String, required: true }
    }
  ],
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clients"
  },
  description: {
    type: String
  },
  projectStatus: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employees"
  }
});

const Project = mongoose.model("projects", schema);
module.exports.Project = Project;

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
