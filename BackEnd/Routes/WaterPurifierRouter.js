const express = require("express");
const router = express.Router();
const WaterPurifierServices = require("../Models/WaterPurifier");

router.get("/waterPurifier", async (req, res) => {
  try {
    const data = await WaterPurifierServices.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services" });
  }
});

module.exports = router;
