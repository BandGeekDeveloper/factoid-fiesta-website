const mongoose = require('mongoose');

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
  category: {
    type: ,
    required: true,
    trim: true,
  }
});
