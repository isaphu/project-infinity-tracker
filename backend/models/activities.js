const mongoose = require("mongoose");
//create activity schema
const activitySchema = new mongoose.Schema({
  activityType: {
    type: String,
  },
  description: {
    type: String,
  },
  duration: {
    type: Number,
  },
  data: {
    type: Date,
  },
});

module.exports = mongoose.model("activity", activitySchema);
