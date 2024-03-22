const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process if unable to connect
  }
  console.log('Successfully connected to the database.');
});

module.exports = connection;
