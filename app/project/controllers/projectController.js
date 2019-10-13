const { Project } = require("../models/projectM");
const { Claim } = require("../../expert/models/claimM");
module.exports.create = async (req, res) => {
  // const result = validate(req.body);
  // if (result.error) {
  //     res.status(400).json({ message: result.error.details[0].message });
  //     return;
  // }
  const project = await Project.create({
    // userId: req.body.userId,
    projectName: req.body.projectName,
    projectCode: req.body.projectCode,
    date: req.body.date,
    projectNumber: req.body.projectNumber,
    projectOwner: req.body.projectOwner,
    projectteam: req.body.projectteam,
    clientId: req.body.clientId,
    employeeId: req.body.employeeId,
    description: req.body.description,
    clientContacts: req.body.clientContacts,
    projectStatus: req.body.projectStatus
  });
  await project.save();
  res.json({ message: "Successfully Created Project!..." });
};

module.exports.getProjectByEmployee = async (req, res) => {
  const project = await Project.find(
    { employeeId: req.body.employeeId } || { employeeId: req.user._id }
  );
  if (project.length < 1) {
    return res.status(400).json({ message: "Project Not Found!" });
  }
  res.json(project);
};

module.exports.getAllProjects = async (req, res) => {
  const projects = await Project.find();
  if (projects.length < 1) {
    return res.status(400).json({ message: "Project Not Found!" });
  }
  res.json(projects);
};

module.exports.updateEmployee = async (req, res) => {
  const project = await Project.findOneAndUpdate(
    {
      _id: req.body.projectId
    },
    {
      $set: {
        employeeId: req.body.employeeId
      }
    }
  );
  if (!project) {
    return res.status(400).json({ message: "Project Not Found!" });
  }
  const claim = await Claim.findOneAndUpdate(
    {
      projectId: req.body.projectId
    },
    {
      $set: {
        employeeId: req.body.employeeId
      }
    }
  );
  if (!claim) {
    return res.status(400).json({ message: "Project Not Found!" });
  }
  res.status(200).json({ message: "Successfully Changed Employee!..." });
};

// module.exports.update = async (req, res) => {
//     const project = await Project.findOneAndUpdate({
//         _id: req.body.projectId
//         // , userId: req.body.userId
//     },
//         {
//             $set: {
//                 name: req.body.name,
//                 date: req.body.date,
//                 number: req.body.number,
//                 owner: req.body.owner,
//                 team: req.body.team,
//                 clientName: req.body.clientName,
//                 description: req.body.description
//             }
//         });
//     if (!project) {
//         return res.status(400).json({ message: "Project Not Found!" });
//     }
//     res.json({ message: "Successfully updated!..." });
// };
