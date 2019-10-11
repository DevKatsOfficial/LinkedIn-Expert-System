const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    id: {
        type: Number
    },
    name: {
        type: String,
    },
    state_id: {
        type: String
    }
});


const Cities = mongoose.model('cities', schema);

module.exports.Cities = Cities;
