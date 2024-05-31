const mongoose = require('mongoose');

const Vaccine = new mongoose.Schema({
    name: {type: String},
    firstShot: {type: String},
    SecondShot: {type: String},
    vetName: {type: String}
});

module.exports = mongoose.model('vaccines', Vaccine);