const { Expert } = require('../models/expertM')

// module.exports.create = async (req, res) => {
//     // const result = validate(req.body);
//     // if (result.error) {
//     //     res.status(400).json({ message: result.error.details[0].message });
//     //     return;
//     // }
//     const expert = await Expert.create({
//         userId: req.body.userId,
//         linkedin_url: req.body.linkedin_url,
//         introduction: req.body.introduction,
//         summary: req.body.summary,
//         experiences: req.body.experiences,
//         educations: req.body.educations,
//         certifications: req.body.certifications,
//         volunteer_experiences: req.body.volunteer_experiences,
//         skills: req.body.skills,
//         projects: req.body.projects,
//         publications: req.body.publications,

//     });
//     await expert.save();
//     res.json({ message: 'Successfully Saved!...' });
// }
module.exports.getExpert = async (req, res) => {
    const expert = await Expert.findById(req.params.expertId);
    if (!expert) {
        return res.status(400).json({ message: "Expert Not Found!" });
    }
    res.json(expert);
}
module.exports.SearchExpert = async (req, res) => {
    const expert = await Expert.find({ "skills.name": { $regex: req.body.skill, $options: 'i' } }, { skills: { $elemMatch: { name: { $regex: req.body.skill, $options: 'i' } } } }).select('skills.name introduction');
    if (!expert) {
        return res.status(400).json({ message: "Expert Not Found!" });
    }
    res.json(expert);
}

module.exports.update = async (req, res) => {
    const expert = await Expert.findOneAndUpdate({ linkedin_url: req.body.linkedin_url },
        {
            $set: {
                introduction: req.body.introduction,
                summary: req.body.summary,
                experiences: req.body.experiences,
                educations: req.body.educations,
                certifications: req.body.certifications,
                volunteer_experiences: req.body.volunteer_experiences,
                skills: req.body.skills,
                projects: req.body.projects,
                publications: req.body.publications
            }
        });
    if (!expert) {
        return res.status(400).json({ message: "Expert Not Found!" });
    }
    res.json({ message: 'Successfully updated!...' });
}
