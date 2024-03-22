const UserDB = require("../models/userModel");
const bcrypt = require('bcrypt');

// Auth controller example
exports.userLogin = async function (req, res, email, password) {
  // Check if user exists
  const oldUser = await UserDB.getUserByEmail(email);

  if (oldUser) {
    // Check if the provided password matches the stored password
    const isMatch = await bcrypt.compare(password, oldUser.password);

    if (isMatch) {
      // Password is correct
      req.session.authenticated = true;
      req.session.userId = oldUser.user_id;
      req.session.email = oldUser.email;

      // Redirect to dashboard or relevant page
      res.redirect('/dashboard');
    } else {
      // Incorrect password
      req.session.authenticated = false;
      res.status(401).json({ msg: "Incorrect username or password" });
    }
  } else {
    // User does not exist
    res.status(404).json({ msg: "User does not exist" });
  }res.send("User login logic here.");
};


const authentication = async (req, res, next) => {
  if (!req.session.authenticated) {
    return res.redirect("/login?q=session-expired");
  }

  try {
    let user = await UserDB.findById(req.session.userId);

    if (!user) {
      return res.redirect("/login?q=session-expired");
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
};

const userModel = require('../models/userModel');

exports.updateUserRole = async (req, res) => {
  try {
    const { userId, newRole } = req.body;
    const affectedRows = await userModel.updateUserRole(userId, newRole);
    
    if (affectedRows > 0) {
      res.status(200).send('User role updated successfully');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating user role');
  }
  res.send("Update user role logic here.");
};

// module.exports = {
//   userLogin,
//   authentication,
//   updateUserRole
// };