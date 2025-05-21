const mongoose = require("mongoose");

const PaintingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number },
  views_count: { type: Number },
  starts_at_price: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  category: { type: String },
});

module.exports = mongoose.model("Painting", PaintingSchema, "painting");
