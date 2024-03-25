// models/salesModel.js
const db = require('../config/db');

class SalesModel {
  getSalesSummary(callback) {
    const query = `SELECT bill_id, bill_date, SUM(number_of_items * bill_price) AS total_price 
                   FROM sales 
                   GROUP BY bill_id, bill_date 
                   ORDER BY bill_date DESC`;
    db.query(query, callback);
  }

  getBestSellers(callback) {
    const query = `SELECT product_id, product_name, product_images, COUNT(*) AS product_sales_count, SUM(bill_price) AS total_income 
                   FROM sales 
                   GROUP BY product_id, product_name, product_images 
                   ORDER BY product_sales_count DESC 
                   LIMIT 10`;
    db.query(query, callback);
  }
}

module.exports = new SalesModel();
