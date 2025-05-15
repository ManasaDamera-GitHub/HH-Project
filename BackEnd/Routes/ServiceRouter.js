const express = require("express");
const router = express.Router();
const WomenService = require("../Models/WomenService");
const WomenSpa = require("../Models/WomenSpa");
// Correct: function is passed directly to router.get
router.get("/services", async (req, res) => {
  try {
    const data = await WomenService.find();
    res.json(data); // Send the actual data
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});
router.get("/womenSpa", async (req, res) => {
  try {
    const data = await WomenSpa.find();
    res.json(data); // Send the actual data
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

module.exports = router;
