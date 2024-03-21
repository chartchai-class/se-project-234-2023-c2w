const User = require('../models/userModel');

exports.signup = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Hash password, create and save user, etc.
    const newUser = new User({
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).send("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
};
