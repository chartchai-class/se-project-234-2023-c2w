const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/categoryController');

// Get all categories sorted by category name
router.get('/categories', categoryController.getAllCategories);

// Add a new category
router.post('/categories', categoryController.addCategory);

// Get a single category by id
router.get('/categories/:id', categoryController.getCategoryById);

// Update an existing category by id
router.put('/categories/:id', categoryController.updateCategory);

// Delete a category by id
router.delete('/categories/:id', categoryController.deleteCategory);

module.exports = router;
