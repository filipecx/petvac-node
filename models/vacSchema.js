const mongoose = require('mongoose');

const Vaccine = new mongoose.Schema({
    name: {type: String},
    firstShot: {type: String},
    secondShot: {type: String},
    vetName: {type: String},
    petName: {type: String}
});

module.exports = mongoose.model('vaccines', Vaccine);