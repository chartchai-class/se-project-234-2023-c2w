const UserDB = require("../models/userModel");
const bcrypt = require('bcrypt');

// User login function
exports.userLogin = async function (req, res) {
  const { email, password } = req.body;

  try {
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
        return res.redirect('/');
      } else {
        // Incorrect password
        req.session.authenticated = false;
        return res.status(401).json({ msg: "Incorrect username or password" });
      }
    } else {
      // User does not exist
      return res.status(404).json({ msg: "User does not exist" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error. Please try again later." });
  }
};

exports.adminLogin = async function (req, res) {
  const { email, password } = req.body;

  try {
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
        return res.redirect('/dashboard');
      } else {
        // Incorrect password
        req.session.authenticated = false;
        return res.status(401).json({ msg: "Incorrect username or password" });
      }
    } else {
      // User does not exist
      return res.status(404).json({ msg: "User does not exist" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error. Please try again later." });
  }
};


// Middleware to check if user is authenticated
exports.authentication = async (req, res, next) => {
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
    return res.status(500).json({ msg: "Server error. Please try again later." });
  }
};

// Function to update user role
exports.updateUserRole = async (req, res) => {
  try {
    const { userId, newRole } = req.body;
    const affectedRows = await userModel.updateUserRole(userId, newRole);
    
    if (affectedRows > 0) {
      return res.status(200).send('User role updated successfully');
    } else {
      return res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error updating user role');
  }
};