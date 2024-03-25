
const connection = require('../config/db.js');

// Define userSignup function
async function userSignup(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;
    
    // Validate request body
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).send('All fields are required');
    }
    console.log(password);
    // Generate salt rounds
    const saltRounds = 10;

    const newUser = { firstname, lastname, email, password, role: 'user' };
    
    // Insert new user into the database
    connection.query('INSERT INTO users SET ?', newUser, (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Server error');
      }
      return res.redirect('Homepage');
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
}

// Export the userSignup function
module.exports = {
  userSignup
};
