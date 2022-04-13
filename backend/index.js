const express = require("express");

const connectDB = require('./config/database.js');
const activitySchema = require('./models/activities.js');
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
      data: 'Welcome to infinity-tracker-backend'
  });
});


// CRUD routes

// (C) CREATE activity

server.post('/api/v1/createActivities', function(req,res) {
  
})