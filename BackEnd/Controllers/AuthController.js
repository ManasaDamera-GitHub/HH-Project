const userModel = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.SIGNUP = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res
        .status(401)
        .json({ message: "Please fill all the fields. ", success: false });
    }

    const existingemail = await userModel.findOne({ email });
    if (existingemail) {
      return res.status(401).json({
        message: "user already exists with this email",
        success: false,
      });
    }

    const existingUser = await userModel.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully",
      success: true,
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Signup error" });
  }
};

exports.LOGIN = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required ", success: false });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid email or password", success: false });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECReT, {
      expiresIn: "10d",
    }); // Here

    const UserData = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1 * 24 * 60 * 1000,
      })
      .json({
        message: `WELCOME back ${UserData.name}`,
        success: true,
        user: UserData,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Signup error" });
  }
};

exports.LOGOUT = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Logout error" });
  }
};

// exports.PROFILE = async (req, res) => {
//   try {
//     const profile = await userModel.findById(req.user._id).select("password");
//     return res.status(200).json(profile);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Profile error" });
//   }
// };
