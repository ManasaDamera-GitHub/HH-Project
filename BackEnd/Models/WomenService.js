// const mongoose = require("mongoose");

// const WomenServiceSchema = new mongoose.Schema({}, { strict: "false" });

// module.exports = mongoose.model("WomenServices", WomenServiceSchema, "Women");

const mongoose = require("mongoose");

const WomenServiceSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model(
  "WomenService",
  WomenServiceSchema,
  "WomenServices"
);
