
const { User } = require('../models/usersM')

module.exports.getUser = async (req, res) => {

    const user = await User.findById(req.params.userId)
        .select('-password -lev')

    if (!user) {
        return res.status(404).json({ message: 'user not found' });
    }

    res.send(user);

};

module.exports.updateUser = async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        linkedInUrl: req.body.linkedInUrl,
        projectNumber: req.body.projectNumber
    };
    const updateuser = await User.findByIdAndUpdate(req.params.userId, {
        $set: user
    },
        { new: true }
    );
    res.json({ message: 'Updated' });
};

module.exports.deleteUser = async (req, res) => {
    const deleteuser = await User.findByIdAndRemove(req.params.userId);
    res.json({ message: 'Deleted' });
};
