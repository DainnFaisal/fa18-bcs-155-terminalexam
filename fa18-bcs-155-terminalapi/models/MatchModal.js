var mongoose = require('mongoose');
const Joi = require('@hapi/joi');
var MatchSchema = mongoose.Schema({
    City: String,
    Date: String,
    TeamA : String,
    TeamB: Number,
     
});
function validateProduct(data){
    const schema = Joi.Object({
        City: Joi.string().min(3).max(10).required(),
        Date: Joi.Date().min(3).max(10).required(),
        TeamA: Joi.string().min(10).required(),
        TeamB: Joi.string().min(0).$_match(!TeamA).required(),
        
    });
    return schema.validate(data,{abortEarly:false});

}


var Match = mongoose.model("team",MatchSchema);
module.exports.MatchModel = Match;
module.exports.validate = validateProduct;
