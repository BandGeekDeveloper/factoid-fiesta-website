const mongoose = require('mongoose');
const Quiz = require('./quizzes');
const Category = require('./category');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
    trim: true,
  },

  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
  },

  choices: mongoose.Schema.Types.Mixed,

  correctAnswer: {
    type: Number,
    required: true,
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

const Question = new mongoose.Model('Question', questionSchema);
module.exports = Question;
