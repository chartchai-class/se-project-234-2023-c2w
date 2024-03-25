const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const authController = require('../Controllers/authController');

// Endpoint for admin signup
router.post('/signup', adminController.adminSignup);

router.post('/signin', authController.adminLogin);
// Endpoint for updating user role
router.post('/updateUserRole', authController.updateUserRole);

module.exports = router;