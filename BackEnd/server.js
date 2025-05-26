const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
// const dotenv = require("dotenv");
const port = 3000 || 5000;
// dotenv.config();
const UserRoutes = require("./Routes/AuthRouter");
const ServiceRoutes = require("./Routes/ServiceRouter");
const MenServiceRoutes = require("./Routes/MenServiceRouter");
const ACServiceRoutes = require("./Routes/ACServiceRouter");
const WallPanelRoutes = require("./Routes/WallPanelRouter");
const SmartLockRoutes = require("./Routes/SmartLockRouter");
const CleaningPestRoutes = require("./Routes/CleaningPestServicesRouter");
const PaintingRoutes = require("./Routes/PaintingRouter");
const WaterPurifierRoutes = require("./Routes/WaterPurifierRouter");
const ElectricianRoutes = require("./Routes/ElectricianRouter");
// const connectDB = require("./Config/db");
// const dotenv = require("dotenv");
// dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// const MONGO_URL =mongodb+srv://dameramanasa25:zjyBO0fYggPsGWdj@cluster0.glvzeyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;
// const port = process.env.PORT || 4000;
const URI = "mongodb://127.0.0.1:27017/category";

mongoose
  // .connect(process.env.MONGO_URL)
  .connect(URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection failed :", err.message));

app.use("/", UserRoutes);
app.use("/", ServiceRoutes);
app.use("/", MenServiceRoutes);
app.use("/", ACServiceRoutes);
app.use("/", WallPanelRoutes);
app.use("/", SmartLockRoutes);
app.use("/", CleaningPestRoutes);
app.use("/", PaintingRoutes);
app.use("/", WaterPurifierRoutes);
app.use("/", ElectricianRoutes);

app.listen(port, () => {
  // connectDB();
  console.log(`Server is running in http://localhost:${port}`);
});
