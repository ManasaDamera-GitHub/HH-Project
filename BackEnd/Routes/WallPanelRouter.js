const express = require("express");
const WallServices = require("../Models/WallPanels");
const router = express.Router();

router.get("/wallpanels", async (req, res) => {
  try {
    const data = await WallServices.find();
    res.json(data);
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

module.exports = router;
