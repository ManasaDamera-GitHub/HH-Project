// const express = require("express");
// const router = express.Router();
const WomenServices = require("./Models/WomenService");

const WomenService = async (req, res) => {
  try {
    const data = await WomenServices.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
};

module.exports = WomenService;
