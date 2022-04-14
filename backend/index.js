require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/database.js");
const activityRoutes = require("./routes/activity.js");
const userRoutes = require("./routes/users.js");
const authRoutes = require("./routes/auth.js");

//connect database
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("api/v1/users", userRoutes);
app.use("api/v1/auth", authRoutes);
app.post("/api/v1/createActivities", activityRoutes);
app.get("/api/v1/createActivities", activityRoutes);
app.put("/api/v1/createActivities", activityRoutes);
app.delete("/api/v1/createActivities", activityRoutes);


app.listen(5000, function () {
  console.log("server is running on PORT: 5000");
});  


