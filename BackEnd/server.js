const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const port = 3000 || 5000;
const UserRoutes = require("./Routes/UserRoutes");

const app = express();

const URI = "mongodb://localhost:27017/";

mongoose
  .connect(URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection failed", err.message));

app.use(express.json());
app.use(cors());

app.use("/", UserRoutes);

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});
