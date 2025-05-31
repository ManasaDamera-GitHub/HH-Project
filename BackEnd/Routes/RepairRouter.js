const express = require("express");
const router = express.Router();
const Repair = require("../Models/Repair");

router.get("/repair", async (req, res) => {
  try {
    const data = await Repair.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services" });
  }
});

module.exports = router;
