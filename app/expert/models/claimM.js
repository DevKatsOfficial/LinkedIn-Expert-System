const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    employeeId: {
        type: mongoose.Schema.Types.ObjectId
    },
    experts: [{
        expertId: {
            type: mongoose.Schema.Types.ObjectId
        }
    }],
    projectId: {
        type: mongoose.Schema.Types.ObjectId
    }
});


const Claim = mongoose.model('claimsexperts', schema);

module.exports.Claim = Claim;
