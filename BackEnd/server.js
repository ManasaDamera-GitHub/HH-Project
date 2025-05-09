// const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const port = 3000 || 5000;
const UserRoutes = require("./Routes/AuthRouter");
const ServiceRoutes = require("./Routes/ServiceRouter");
const connectDB = require("./Config/db");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// mongoose
//   .connect(URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("Connection failed", err.message));

app.use("/", UserRoutes);
app.use("/api", ServiceRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running in http://localhost:${port}`);
});
