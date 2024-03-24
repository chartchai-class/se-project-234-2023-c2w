const BaseSQLModel = require("./BaseSQLModel");

// Create a new class for a specific table
class CategoryModel extends BaseSQLModel {

  constructor() {
    super("categories"); //table 'products'
  }

  // Add a new category
  addCategory(categoryId) {
    return this.create(categoryId);
  }

  // Delete a category
  deleteCategory(categoryId) {
    return this.delete(categoryId);
  }

  // Edit a category
  editCategory(categoryId, categoryData) {
    return this.update(categoryId, categoryData);
  } 

  // Show all categories
  getAllCategories() {
    return this.findAll();
  }

  // Find a category by ID

}

const CategoryDB = new CategoryModel();

module.exports = CategoryDB;

// ///////
// const db = require('../config/db');

// class CategoryModel {
//   // Get all categories
//   getAllCategories() {
//     return db.query('SELECT * FROM categories');
//   }

//   // Get a single category by ID
//   getCategoryById(id) {
//     return db.query('SELECT * FROM categories WHERE id = ?', [id]);
//   }

//   // Create a new category
//   createCategory(name) {
//     return db.query('INSERT INTO categories (name) VALUES (?)', [name]);
//   }

//   // Update a category by ID
//   updateCategory(id, name) {
//     return db.query('UPDATE categories SET name = ? WHERE id = ?', [name, id]);
//   }

//   // Delete a category by ID
//   deleteCategory(id) {
//     return db.query('DELETE FROM categories WHERE id = ?', [id]);
//   }
// }

// module.exports = new CategoryModel();

