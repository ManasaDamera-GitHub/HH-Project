const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const port = 3000 || 5000;
const UserRoutes = require("./Routes/AuthRouter");
const ServiceRoutes = require("./Routes/ServiceRouter");
const MenServiceRoutes = require("./Routes/MenServiceRouter");
// const connectDB = require("./Config/db");
// const dotenv = require("dotenv");
// dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const URI = "mongodb://127.0.0.1:27017/category";

mongoose
  .connect(URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection failed", err.message));

app.use("/", UserRoutes);
app.use("/", ServiceRoutes);
app.use("/", MenServiceRoutes);

app.listen(port, () => {
  // connectDB();
  console.log(`Server is running in http://localhost:${port}`);
});
