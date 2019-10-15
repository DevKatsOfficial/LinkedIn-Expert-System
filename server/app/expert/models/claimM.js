const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employees"
  },
  experts: [
    {
      expertId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "experts"
      }
    }
  ],
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects"
  }
});

const Claim = mongoose.model("claimsexperts", schema);

module.exports.Claim = Claim;
