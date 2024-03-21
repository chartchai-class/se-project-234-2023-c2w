const BaseSQLModel = require("./BaseSQLModel");

// Create a new class for a specific table
class ProductModel extends BaseSQLModel {

  constructor() {
    super("products"); //table 'products'
  }

}

const ProductDB = new ProductModel();

module.exports = ProductDB;