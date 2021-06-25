var mongoose = require("mongoose");
var TeamSchema = mongoose.Schema({
  TeamName: String,
  City: String,
  Date: String,
});
var TeamModel = mongoose.model("PSL", TeamSchema);
module.exports = TeamModel;
