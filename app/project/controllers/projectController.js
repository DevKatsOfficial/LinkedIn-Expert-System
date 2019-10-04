const { Project } = require("../models/projectM");

module.exports.create = async (req, res) => {
    // const result = validate(req.body);
    // if (result.error) {
    //     res.status(400).json({ message: result.error.details[0].message });
    //     return;
    // }
    const project = await Project.create({
        // userId: req.body.userId,
        name: req.body.name,
        date: req.body.date,
        number: req.body.number,
        owner: req.body.owner,
        team: req.body.team,
        clientName: req.body.clientName,
        description: req.body.description
    });
    await project.save();
    res.json({ message: 'Successfully Created Project!...' });
}
module.exports.getProjectByUser = async (req, res) => {
    const project = await Project.findById(req.user._id);
    if (!project) {
        return res.status(400).json({ message: "Project Not Found!" });
    }
    res.json(project);
};
// module.exports.SearchExpert = async (req, res) => {
//     if (req.body.country) {
//         const expert = await Expert.find({ $or: [{ "introduction.first_name": req.body.first_name }, { "introduction.last_name": req.body.last_name }, { "introduction.location_name": { $regex: req.body.country, $options: 'i' } }] });
//         if (expert.length < 1) {
//             return res.status(400).json({ message: "Expert Not Found!" })
//         }
//         return res.json(expert);
//     }
//     const expert = await Expert.find({ $or: [{ "introduction.first_name": req.body.first_name }, { "introduction.last_name": req.body.last_name }] });
//     if (expert.length < 1) {
//         return res.status(400).json({ message: "Expert Not Found!" })
//     }
//     res.json(expert);

// }

module.exports.update = async (req, res) => {
    const project = await Project.findOneAndUpdate({
        _id: req.body.projectId
        // , userId: req.body.userId 
    },
        {
            $set: {
                name: req.body.name,
                date: req.body.date,
                number: req.body.number,
                owner: req.body.owner,
                team: req.body.team,
                clientName: req.body.clientName,
                description: req.body.description
            }
        });
    if (!project) {
        return res.status(400).json({ message: "Project Not Found!" });
    }
    res.json({ message: "Successfully updated!..." });
};
