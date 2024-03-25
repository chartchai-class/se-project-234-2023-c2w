const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController'); // Ensure correct path and capitalization
const { userLogin, updateUserRole } = require('../Controllers/authController'); // Check the capitalization of "controllers"

// Endpoint for user signup
router.post('/signup', userController.userSignup);

// Endpoint for user login
router.post('/login', userLogin);

// Endpoint for updating user role
router.post('/updateUserRole', updateUserRole);

module.exports = router;