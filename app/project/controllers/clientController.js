const { Client } = require("../models/clientM");

module.exports.create = async (req, res) => {
  // const valid = validate(req.body);
  // if (valid.error) {
  //     res.status(400).json({ message: valid.error.details[0].message });
  //     return;
  // }

  const client = await Client.create({
    clientCompany: req.body.clientCompany,
    prepaid: req.body.prepaid,
    description: req.body.description,
    payAsYouGo: req.body.payAsYouGo,
    creditRemaining: req.body.creditRemaining,
    billingCurrency: req.body.billingCurrency,
    pricingRules: req.body.pricingRules,
    pricePerhourCall: req.body.pricePerhourCall,
    entityToInvoice: req.body.entityToInvoice,
    InvoiceContacts: req.body.InvoiceContacts,
    vat: req.body.vat
  });
  await client.save();
  res.json({ message: "Client created Successfully!..." });
};

module.exports.update = async (req, res) => {
  const client = await Client.findOneAndUpdate(
    {
      _id: req.body.clientId
    },
    {
      $set: {
        clientCompany: req.body.clientCompany,
        prepaid: req.body.prepaid,
        description: req.body.description,
        payAsYouGo: req.body.payAsYouGo,
        billingCurrency: req.body.billingCurrency,
        pricingRules: req.body.pricingRules,
        pricePerhourCall: req.body.pricePerhourCall,
        entityToInvoice: req.body.entityToInvoice,
        InvoiceContacts: req.body.InvoiceContacts,
        vat: req.body.vat
      }
    }
  );
  if (!client) {
    return res.status(200).json({ message: "Client Not Found!" });
  }
  res.json({ message: "Successfully updated Client!..." });
};

module.exports.getAllClients = async (req, res) => {
  const clients = await Client.find();
  if (clients.length < 1) {
    return res.status(200).json({ message: "Clients Not Found!" });
  }
  res.json(clients);
};

module.exports.checkRemainingBalance = async (req, res) => {
  const client = await Client.findById(req.body.clientId).select(
    "creditRemaining"
  );
  if (!client) {
    return res.status(200).json({ message: "Client Not Found!" });
  }
  res.json(client);
};

module.exports.addToRemainingBalance = async (req, res) => {
  const client = await Client.findById(req.body.clientId);
  if (!client) {
    return res.status(200).json({ message: "Client Not Found!" });
  }
  let credit = client.creditRemaining + req.body.credit;
  await client.update({ $set: { creditRemaining: credit } });
  await client.save();
  res.status(200).json({ message: "Credit Updated!" });
};

module.exports.chargeCreditForCall = async (req, res) => {
  const client = await Client.findById(req.body.clientId);
  if (!client) {
    return res.status(200).json({ message: "Client Not Found!" });
  }
  let credit = client.creditRemaining - req.body.credit;
  await client.update({ $set: { creditRemaining: credit } });
  await client.save();
  res.status(200).json({ message: "Charge Credit Successfull!" });
};
