const router = require("express").Router();
const Activity = require("../models/Activity.js");

// Activity routes

// (C) CREATE activity

router.post("/", async function (request, response) {
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

router.get("/", async function (request, response) {
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

router.put("/", async function (request, response) {
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

router.delete("/", async function (request, response) {
  //deleteOne => delete by id
  const result = await Activity.deleteOne({
    _id: request.params.id,
  });

  response.status(200).json({
    success: true,
    data: result,
  });
});

module.exports = router;
