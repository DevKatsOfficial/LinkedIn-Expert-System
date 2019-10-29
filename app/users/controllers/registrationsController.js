const bcrypt = require("bcrypt");
const { validate, User } = require("../models/usersM");
const { Expert } = require("../../expert/models/expertM");
const { Employee } = require("../models/employeeM");
const { Admin } = require("../models/adminM");
const { Claim } = require("../../expert/models/claimM");
const { Project } = require("../../project/models/projectM");

module.exports.register = async (req, res) => {
  // const result = validate(req.body);
  // if (result.error) {
  //   res.status(400).json({ message: result.error.details[0].message });
  //   return;
  // }

  const user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400).json({ message: "This email is already registered!" });
    return;
  }
  const salt = await bcrypt.genSalt(10);

  const register = await User.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    linkedInUrl: req.body.linkedInUrl,
    projectNumber: req.body.projectNumber,
    password: await bcrypt.hash(req.body.password, salt)
  });
  const output = await register.save();
  const expert = await Expert.create({
    userId: output._id,
    linkedin_url: req.body.linkedInUrl,
    email: req.body.email,
    phone: req.body.phone,
    projectNumber: req.body.projectNumber
  });
  const saveExpert = await expert.save();
  const project = await Project.findOne({ projectNumber: req.body.projectNumber });
  const claim = await Claim.findOneAndUpdate(
    { projectId: project._id },
    { $push: { experts: saveExpert._id } }
  );

  if (!claim) {
    const claim = await Claim.create({
      employeeId: project.employeeId,
      experts: saveExpert._id,
      projectId: project._id
    });
    await claim.save();
  }
  res.json({ message: `Successfully registered And Claimed To Project  ${project.projectName} !...` });
};

module.exports.employeeRegister = async (req, res) => {
  // const result = validate(req.body);
  // if (result.error) {
  //     res.status(400).json({ message: result.error.details[0].message });
  //     return;
  // }

  const user = await Employee.findOne({ email: req.body.email });
  if (user) {
    res.status(400).json({ message: "This email is already registered!" });
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const register = await Employee.create({
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, salt),
    lev: req.body.lev,
    adminId: req.user._id
  });
  const output = await register.save();
  res.json({ message: "Successfully registered Employee!..." });
};

module.exports.adminRegister = async (req, res) => {
  // const result = validate(req.body);
  // if (result.error) {
  //     res.status(400).json({ message: result.error.details[0].message });
  //     return;
  // }

  const user = await Admin.findOne({ email: req.body.email });
  if (user) {
    res.status(400).json({ message: "This email is already registered!" });
    return;
  }
  const salt = await bcrypt.genSalt(10);
  // console.log(req.body);
  const register = await Admin.create({
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, salt),
    lev: req.body.lev
  });
  const output = await register.save();
  res.json({ message: "Successfully registered Admin!..." });
};
