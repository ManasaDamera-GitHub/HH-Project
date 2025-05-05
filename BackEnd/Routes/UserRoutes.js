const express = require("express");
const router = express.Router();
const Users = require("../Models/UserSchema");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const data = await Users.find();
  res.send(data);
  res.send("data")
});

router.post("/register", async (req, res) => {
  const newUser = new Users(req.body);
  const saveUser = await newUser.save();
  res.json({ status: "Saved Successfully", savedUser: saveUser });
});
router.post("/login", async (req, res) => {
  const { mobile, password } = req.body;
  try {
    const user = await Users.findOne({ mobile });
    if (user) {
      if (user.password === password) {
        const token = jwt.sign({ mobile: user.mobile }, "hello");
        console.log(token);
        res.send(200).json({ message: "Success", token });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    } else {
      res.send(400).json({ message: "User not found" });
    }
  } catch (error) {
    res.send("Error,Something went wrong");
  }
});

module.exports = router;
