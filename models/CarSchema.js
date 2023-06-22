var mongoose = require("mongoose");
var schema = mongoose.Schema;
var model = mongoose.model;

var CarSchema = schema({
  name: String,
  price: Number,
  image: String,
  

}, 
{
  versionKey: false
});

var CarModel = model("Car", CarSchema, "Car");

module.exports = CarModel;
