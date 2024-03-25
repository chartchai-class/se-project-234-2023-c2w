const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');

router.post('/signup', authController.signup);

module.exports = router;
