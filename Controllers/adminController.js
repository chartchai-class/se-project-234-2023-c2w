// controllers/adminController.js
const bcrypt = require('bcrypt');
const connection = require('../config/db.js');

// Admin controller example
exports.adminSignup = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { firstname, lastname, email, password: hashedPassword, role: 'admin' };

    connection.query('INSERT INTO users SET ?', newUser, (error, results) => {
      if (error) throw error;
      res.redirect('/adminSuccess');
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
  res.send("Admin signup logic here.");
};
