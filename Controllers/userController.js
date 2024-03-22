const bcrypt = require('bcrypt');
const connection = require('../config/db.js');

exports.userSignup = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { firstname, lastname, email, password: hashedPassword, role: 'user' };

    connection.query('INSERT INTO users SET ?', newUser, (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Server error');
      }
      return res.redirect('/userSuccess');
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
  // Export the functions you want to make available outside this module
module.exports = {
  userSignup
  // Other functions you may have
};
};
