const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    trim: true,
  },

  icon: {
    type: String,
    required: true,
    trim: true,
  },
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
