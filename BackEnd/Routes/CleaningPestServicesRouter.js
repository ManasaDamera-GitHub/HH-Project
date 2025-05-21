const express = require("express");
const router = express.Router();
const CleaningPestServices = require("../Models/CleaningPestServices");

router.get("/cleaningPestControl", async (req, res) => {
  try {
    const data = await CleaningPestServices.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

module.exports = router;
