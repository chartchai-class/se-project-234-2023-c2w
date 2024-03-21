const express = require('express');
const router = express.Router();
const { userLogin, updateUserRole } = require('../controllers/authController');

// Route for user login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  userLogin(req, res, email, password);
});

// Route for updating user role
router.post('/updateUserRole', updateUserRole);

module.exports = router;
