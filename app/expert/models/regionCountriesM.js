const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    region: {
        type: String
    },
    country: {
        type: String,
    },
    country_code: {
        type: String
    }
});


const CountriesRegion = mongoose.model('countriesregions', schema);

module.exports.CountriesRegion = CountriesRegion;
