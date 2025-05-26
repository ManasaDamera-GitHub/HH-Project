const express = require("express");
const router = express.Router();
const PaintingServices = require("../Models/Painting");

router.get("/painting", async (req, res) => {
  try {
    const data = await PaintingServices.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services" });
  }
});
module.exports = router;
