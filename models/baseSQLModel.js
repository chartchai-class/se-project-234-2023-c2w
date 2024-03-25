const mysql = require('mysql2');
const pool = require('../config/db'); 

class BaseSQLModel {
  constructor(tableName) {
    this.tableName = tableName;
  }

  // Executes a given SQL query with the provided parameters and returns a Promise
  executeQuery(query, params) {
    return new Promise((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Fetch all rows from the table
  findAll() {
    const query = `SELECT * FROM ${this.tableName}`;
    return this.executeQuery(query);
  }

  // Fetch a single row by ID
  findById(id) {
    const query = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    return this.executeQuery(query, [id]).then(results => results[0]);
  }

  // Find a single row by any key
  findByKey(key, value) {
    const query = `SELECT * FROM ${this.tableName} WHERE ?? = ?`;
    return this.executeQuery(query, [key, value]).then(results => results[0]);
  }

  // Find all rows with a matching key
  findAllByKey(key, value) {
    const query = `SELECT * FROM ${this.tableName} WHERE ?? = ?`;
    return this.executeQuery(query, [key, value]);
  }

  // Insert a new row into the table
  create(data) {
    const query = `INSERT INTO ${this.tableName} SET ?`;
    return this.executeQuery(query, data).then(result => result.insertId);
  }

  // Update a row by ID
  update(id, data) {
    const query = `UPDATE ${this.tableName} SET ? WHERE id = ?`;
    return this.executeQuery(query, [data, id]).then(result => result.affectedRows);
  }

  // Delete a row by ID
  delete(id) {
    const query = `DELETE FROM ${this.tableName} WHERE id = ?`;
    return this.executeQuery(query, [id]).then(result => result.affectedRows);
  }
}

module.exports = BaseSQLModel;
