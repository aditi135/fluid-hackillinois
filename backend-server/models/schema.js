// models/schema.js
const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  client_id: { type: String, required: true },
  goals: {
    saving: [
      {
        goal_id: String,
        target_amount: Number,
        current_amount: Number,
        deadline: String
      }
    ],
    debt: [
      {
        goal_id: String,
        target_amount: Number,
        current_amount: Number,
        deadline: String
      }
    ],
    credit_score: [
      {
        goal_id: String,
        target_score: Number,
        current_score: Number,
        deadline: String
      }
    ]
  }
});

const Goal = mongoose.model('Goal', goalSchema);
module.exports = Goal;
