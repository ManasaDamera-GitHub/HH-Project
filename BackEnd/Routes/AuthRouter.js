const express = require("express");
const router = express.Router();
const {
  SIGNUP,
  LOGIN,
  LOGOUT,
  PROFILE,
} = require("../Controllers/AuthController");


router.post("/Signup", SIGNUP);
router.post("/login", LOGIN);
router.post("/logout", LOGOUT);
// router.get("/profile", PROFILE)

module.exports = router;
