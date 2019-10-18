const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  clientCompany: {
    type: String
  },
  prepaid: {
    type: Boolean
  },
  payAsYouGo: {
    type: Boolean
  },
  creditRemaining: {
    type: Number,
    required: true
  },
  billingCurrency: {
    type: String
  },
  pricingRules: {
    type: String
  },
  pricePerhourCall: {
    type: Number
  },
  entityToInvoice: {
    type: String
  },
  InvoiceContacts: [
    {
      name: { type: String }
    }
  ],
  vat: {
    type: String
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

const Client = mongoose.model("clients", schema);

module.exports.Client = Client;
