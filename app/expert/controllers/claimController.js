const { Claim } = require("../models/claimM");

module.exports.create = async (req, res) => {
    // const result = validate(req.body);
    // if (result.error) {
    //     res.status(400).json({ message: result.error.details[0].message });
    //     return;
    // }
    const project = await Claim.findOneAndUpdate({ projectId: req.body.projectId },
        { $push: { experts: req.body.experts } });
    if (!project) {
        const claim = await Claim.create({
            employeeId: req.body.employeeId,
            experts: req.body.experts,
            projectId: req.body.projectId
        });
        await claim.save();
        return res.json({ message: 'Expert Claimed!...' });
    }
    res.json({ message: "Expert Added" });

}


