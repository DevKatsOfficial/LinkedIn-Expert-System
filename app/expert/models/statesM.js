const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    id: {
        type: Number
    },
    name: {
        type: String,
    },
    country_id: {
        type: String
    }
});


const States = mongoose.model('states', schema);

module.exports.States = States;
