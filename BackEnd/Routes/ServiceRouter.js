// const express = require("express");
// const router = express.Router();
// const WomenService = require("../models/WomenService");

// // Correct: function is passed directly to router.get
// router.get("/services", async (req, res) => {
//   try {
//     const data = await WomenService.find();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch services" });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const WomenService = require("../models/WomenService");

// ✅ Get all services
router.get("/services", async (req, res) => {
  try {
    const data = await WomenService.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

// ✅ Get services by category (example: /services/category/waxing_services)
router.get("/services/category/:name", async (req, res) => {
  try {
    const category = req.params.name;
    const data = await WomenService.find({ category });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch category services" });
  }
});

module.exports = router;
