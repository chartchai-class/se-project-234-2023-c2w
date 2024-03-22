const SalesModel = require('../models/salesModel');

exports.getSalesHistory = (req, res) => {
  SalesModel.getSalesSummary((err, salesSummary) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(salesSummary);
  });
};

exports.getBestSellers = (req, res) => {
  SalesModel.getBestSellers((err, bestSellers) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(bestSellers);
  });
};