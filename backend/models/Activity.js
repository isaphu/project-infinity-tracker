const mongoose = require("mongoose");
//create activity schema
const ActivitySchema = new mongoose.Schema({
  activityType: {
    type: String,
  },
  description: {
    type: String,
  },
  duration: {
    type: Number,
  },
  location: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Activity", ActivitySchema);
