// categoryController.js
const CategoryDB = require('./categoryModel');

const categoryController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await CategoryDB.findAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Add more controllers here as needed
};

module.exports = categoryController;
