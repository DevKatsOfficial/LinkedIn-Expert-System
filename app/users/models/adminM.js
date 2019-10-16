const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  lev: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "roles"
  }
});

const Admin = mongoose.model("admins", schema);
module.exports.Admin = Admin;

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
