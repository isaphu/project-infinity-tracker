const mongoose = require('mongoose');

const CreativitySchema = new mongoose.Schema({
	activityId: {
		Number: String,
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
		type: String,
	},
	activity: {
		type: mongoose.Schema.ObjectId,
		ref: 'Activity',
		required: true,
	},
});

module.exports = mongoose.model('Creativity', CreativitySchema);
