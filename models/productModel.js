const BaseSQLModel = require('./BaseSQLModel');

class ProductModel extends BaseSQLModel {
  constructor() {
    super('products'); // 'products' is the table name in the database
  }

  // Fetch all rows from the table
  findAllProduct(ProductId) {
    const ProductId = `SELECT * FROM ${this.tableName}`;
    return this.executeQuery(ProductId);
  }
  
  // Find all products by category ID and sort by product sales count descending
  findAllByCategoryIdAndSort(categoryId) {
    const query = `SELECT * FROM ${this.tableName} WHERE category_id = ? ORDER BY product_sales_count DESC`;
    return this.executeQuery(query, [categoryId]);
  }

  // Add a new product to a category
  addProductToCategory(productData) {
    return this.create(productData);
  }

  // Edit an existing product
  editProduct(productId, productData) {
    return this.update(productId, productData);
  }

  // Delete a product
  deleteProduct(productId) {
    return this.delete(productId);
  }
}

module.exports = new ProductModel();
