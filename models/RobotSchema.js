var mongoose = require("mongoose");
var schema = mongoose.Schema;
var model = mongoose.model;

var RobotSchema = schema({
  name: String,
  price: Number,
  image: String,
  

}, 
{
  versionKey: false
});

var RobotModel = model("Robot", RobotSchema, "robot");

module.exports = RobotModel;
