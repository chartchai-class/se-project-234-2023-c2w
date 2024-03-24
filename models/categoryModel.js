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

// const BaseSQLModel = require('./BaseSQLModel');

// class ProductModel extends BaseSQLModel {
//   constructor() {
//     super('products'); // 'products' is the table name in the database
//   }

//   // Find all products by category ID and sort by product sales count descending
//   findAllByCategoryIdAndSort(categoryId) {
//     const query = `SELECT * FROM ${this.tableName} WHERE category_id = ? ORDER BY product_sales_count DESC`;
//     return this.executeQuery(query, [categoryId]);
//   }

//   // Add a new category
//   addProductToCategory(productData) {
//     return this.create(productData);
//   }

//   // Edit an existing product
//   editProduct(productId, productData) {
//     return this.update(productId, productData);
//   }

//   // Delete a product
//   deleteProduct(productId) {
//     return this.delete(productId);
//   }
// }

// module.exports = new ProductModel();
