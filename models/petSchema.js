const mongoose = require('mongoose');

const Pet = new mongoose.Schema({
    name: {type: String},
    picture: {type: String},
    race: {type: String}
});

module.exports = mongoose.model('pets', Pet);