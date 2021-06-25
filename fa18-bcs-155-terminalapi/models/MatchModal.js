var mongoose = require('mongoose');
const Joi = require('@hapi/joi');
var MatchSchema = mongoose.Schema({
    City: String,
    Date: String,
    TeamA : String,
    TeamB: String,
     
});



var Matches = mongoose.model("teams",MatchSchema);
module.exports.MatchModel = Matches;

