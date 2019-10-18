const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employees"
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  projectNumber: {
    type: String,
    required: true
  }
});

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

const Invitation = mongoose.model("invitations", schema);

// module.exports.validate = validate;
module.exports.Invitation = Invitation;
