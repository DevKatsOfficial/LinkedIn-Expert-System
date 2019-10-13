const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  }
});

const Role = mongoose.model("roles", schema);

function validate(role) {
  const schema = {
    role: Joi.string().required(),
    createCategoryPage: Joi.boolean()
  };
  return Joi.validate(role, schema);
}

module.exports.validate = validate;
module.exports.Role = Role;
