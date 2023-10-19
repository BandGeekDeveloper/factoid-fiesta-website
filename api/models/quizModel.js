const mongoose = require('mongoose');
const Category = require('./categoryModel');

const quizSchema = new mongoose.Schema({
  quizName: {
    type: 'string',
    required: true,
    trim: true,
  },

  description: {
    type: 'string',
    default: 'No description Provided',
    trim: true,
  },

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },

  createdBy: {
    type: String,
    default: 'Anonymous',
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
