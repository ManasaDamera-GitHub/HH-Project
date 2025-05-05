const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  mobile: String,
  password: String,
});

module.exports = mongoose.model("Users", userSchema);
