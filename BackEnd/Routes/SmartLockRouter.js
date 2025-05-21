const express = require("express");
const SmartLockServices = require("../Models/SmartLock");
const router = express.Router();

router.get("/smartlocks", async (req, res) => {
  try {
    const data = await SmartLockServices.find();
    res.json(data);
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

module.exports = router;
