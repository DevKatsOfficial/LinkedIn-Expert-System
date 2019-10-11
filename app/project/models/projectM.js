const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  team: [
    {
      email: { type: String, required: true },
      phoneNum: { type: String, required: true }
    }
  ],
  clientName: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

const Project = mongoose.model("projects", schema);

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
module.exports.Project = Project;
