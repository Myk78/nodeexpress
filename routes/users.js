// const { name } = require("ejs");
const mongoose = require("mongoose");
// const uri = 'mongodb://localhost:27017/mydatabase';
mongoose.connect("mongodb://127.0.0.1:27017/firstmongo");

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age:Number,
});
module.exports = mongoose.model("User",userschema);