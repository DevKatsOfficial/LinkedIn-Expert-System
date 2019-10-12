const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  projectName: {
    type: String,
    required: true
  },
  projectCode: {
    type: String,
    required: true
  },
  date: {
    type: Date
    // required: true
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
  clientName: {
    type: String
    // required: true
  },
  description: {
    type: String
  },
  projectStatus: {
    type: Boolean
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
