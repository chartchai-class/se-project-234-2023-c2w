const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const { userLogin, updateUserRole } = require('../controllers/authController');

// Endpoint for user signup
router.post('/signup_user', userController.userSignup);

// Endpoint for user login
router.post('/login', userLogin);

// Endpoint for updating user role
router.post('/updateUserRole', updateUserRole);

module.exports = router;
