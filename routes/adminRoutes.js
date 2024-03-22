const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');

// Endpoint for admin signup
router.post('/signup_admin', adminController.adminSignup);

// Endpoint for updating user role
router.post('/updateUserRole', authController.updateUserRole);

module.exports = router;
