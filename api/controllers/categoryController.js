const Category = require('../models/categoryModel');
const { validateImage } = require('../middleware/validateFiles');

const createCategory = (req, res) => {
  const { label, icon } = req.body;

  try {
    const category = new Category({ label, icon });
  } catch (err) {}
};
