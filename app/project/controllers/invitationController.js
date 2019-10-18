const { Invitation } = require("../models/invitationM");
const invitationHelper = require("../../../helper_functions/invitationHelper");

module.exports.create = async (req, res) => {
  // const valid = validate(req.body);
  // if (valid.error) {
  //     res.status(400).json({ message: valid.error.details[0].message });
  //     return;
  // }
  // console.log(req.body);
  const invitation = await Invitation.create({
    employeeId: req.user._id,
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
    projectNumber: req.body.projectNumber
  });
  const savedInvitation = await invitation.save();
  invitationHelper.sendInvitationToExperts(
    savedInvitation,
    `http://localhost:4200/register/${savedInvitation.projectNumber}`
  );
  res.json({ message: "Successfully Send Invitation!" });
};
