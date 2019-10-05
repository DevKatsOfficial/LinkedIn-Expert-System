const { Expert } = require("../models/expertM");

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
};
module.exports.SearchExpert = async (req, res) => {
    if (req.body.country) {
        const expert = await Expert.find({ $or: [{ "introduction.first_name": req.body.first_name }, { "introduction.last_name": req.body.last_name }, { "introduction.location_name": { $regex: req.body.country, $options: 'i' } }] });
        if (expert.length < 1) {
            return res.status(400).json({ message: "Expert Not Found!" })
        }
        return res.json(expert);
    }
    const expert = await Expert.find({ $or: [{ "introduction.first_name": req.body.first_name }, { "introduction.last_name": req.body.last_name }] });
    if (expert.length < 1) {
        return res.status(400).json({ message: "Expert Not Found!" })
    }
    res.json(expert);

}

module.exports.update = async (req, res) => {
    const expert = await Expert.findOneAndUpdate({ userId: req.body.userId },
        {
            $set: {
                scrap_datetime: req.body.scrap_datetime,
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
    res.json({ message: "Successfully updated!..." });
};
