const express = require("express");

const connectDB = require("./config/database.js");
const Activity = require("./models/Activity.js");

const server = express();

server.use(express.json());

//connect databse

connectDB();

server.listen(5000, function () {
  console.log("server is running on PORT: 5000");
});

server.get("/", function (request, response) {
  //   response.send("Welcome to infinity-tracker-backend");
  response.status(200).json({
    success: true,
    data: "Welcome to infinity-tracker-backend",
  });
});

// CRUD routes

// (C) CREATE activity

server.post("/api/v1/createActivities", async function (request, response) {
  const activity = await Activity.create(request.body);
  //check if there is no activity created will response with 400 http code
  if (!activity) {
    response.status(400).json({
      success: false,
      message: "Activity not created",
    });
  }
  //else will response with http code 200
  response.status(200).json({
    success: true,
    data: activity,
  });
});

