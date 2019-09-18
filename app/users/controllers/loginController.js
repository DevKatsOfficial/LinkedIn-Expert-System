const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const { User } = require('../models/usersM');
const Joi = require('joi');

module.exports.login = async (req, res) => {
    const result = Validate(req.body);
    if (result.error) {
        res.status(400).json({ message: result.error.details[0].message });
        return;
    }
    const user = await User.findOne({ email: req.body.email }).populate('lev', '-_id');
    if (!user) {
        res.status(400).json({ message: 'Invalid email or password!' });
        return;
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        res.status(400).json({ message: 'Invalid email or password!' });
        return;
    }
    const token = jwt.sign({
        _id: user._id,
        name: user.name,
        level: user.lev
    }, config.get('jwtSecretKey'), {
        expiresIn: 604800 // 1 week, 
    })
    let user2 = user.toObject()
    delete user2.password;
    res.json({ token: token, userData: user2 });
}

function Validate(user) {
    const schema = {
        email: Joi.required(),
        password: Joi.required()
    };
    return Joi.validate(user, schema);

}
