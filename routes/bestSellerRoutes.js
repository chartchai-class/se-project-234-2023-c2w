const express = require('express');
const router = express.Router();
const salesController = require('../Controllers/salesController');

// controllers/salesController.js
salesController.getBestSellers = async (req, res) => {
    try {
        const bestSellers = await salesModel.getBestSellers();
        res.json(bestSellers);
    } catch (error) {
        console.error('Error fetching best sellers:', error);
        res.status(500).send('Server error');
    }
};

module.exports = router;
