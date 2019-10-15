const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    id: {
        type: Number
    },
    sortname: {
        type: String,
    },
    name: {
        type: String,
    },
    phoneCode: {
        type: Number
    }
});


const Countries = mongoose.model('countries', schema);

module.exports.Countries = Countries;
