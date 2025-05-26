const express = require("express");
const router = express.Router();
const ElectricianServices = require("../Models/Electrician");

router.get("/electrician", async (req, res) => {
  try {
    const data = await ElectricianServices.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch services" });
  }
});

module.exports = router;
