const express = require("express");
const router = express.Router();
const MenServices = require("../Models/MenServices");

router.get("/menservices", async (req, res) => {
  try {
    const data = await MenServices.find();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

module.exports = router;
