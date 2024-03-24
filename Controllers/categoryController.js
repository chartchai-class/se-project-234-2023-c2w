// categoryController.js
const CategoryDB = require('../models/categoryModel');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryDB.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.addCategory = async (req, res) => {
  // Implement logic to add a category
};

exports.deleteCategory = async (req, res) => {
  // Implement logic to delete a category
};

exports.editCategory = async (req, res) => {
  // Implement logic to edit a category
};
