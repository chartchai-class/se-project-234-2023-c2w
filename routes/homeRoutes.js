// homeRoutes.js
const express = require('express');
const router = express.Router();
const Authen = require('../Controllers/authen');

// Homepage route
router.get('/', (req, res) => {
  res.render('Homepage.ejs');
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  await Authen.userLogin(req, res, email, password);
});

// Logout route
router.get('/logout', async (req, res) => {
  req.session.destroy();
  // Further actions after logout can be added here
});

module.exports = router;
