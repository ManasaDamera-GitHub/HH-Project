const express = require("express");
const router = express.Router();
const ACService = require("../Models/ACService");

router.get("/acservices", async (req, res) => {
  try {
    const data = await ACService.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

module.exports = router;
