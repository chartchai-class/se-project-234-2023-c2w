const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

router.get('/sales-history', salesController.getSalesHistory);

module.exports = router;
