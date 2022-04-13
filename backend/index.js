const express = require("express");
const cors = require("cors")
const connectDB = require("./config/database.js");
const Activity = require("./models/Activity.js");

const server = express();

server.use(express.json());
server.use(cors());

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

// (R) READ activities

server.get("/api/v1/createActivities", async function (request, response) {
  const activities = await Activity.find();

  if (!activities) {
    response.status(400).json({
      success: false,
      message: "No activity found",
    });
  }
  response.status(200).json({
    success: true,
    count: activities.length,
    data: activities,
  });
});

// (U) Update activites

server.put("/api/v1/createActivities/:id", async function (request, response) {
  //update activity by ID
  const updateActivity = await Activity.findByIdAndUpdate(
    request.params.id,
    request.body
  );

  if (!updateActivity) {
    response.status(400).json({
      success: true,
      message: `No activity found with the id of ${request.params.id}`,
    });
  }

  response.status(200).json({
    success: true,
    data: updateActivity,
  });
});

// (D) Delete activity

server.delete("/api/v1/createActivities/:id", async function (request, response) {
  //deleteOne => delete by id
    const result = await Activity.deleteOne({
      _id: request.params.id,
    });

    response.status(200).json({
      success: true,
      data: result,
    });
  }
);
