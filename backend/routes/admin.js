const express = require('express');
const router = express.Router();

// Get dashboard stats
router.get('/stats', async (req, res) => {
  try {
    const stats = {
      totalOrders: 150,
      totalRevenue: 25000,
      activeUsers: 350,
      productsInStock: 120,
      lowStockProducts: 5,
      monthlyGrowth: 12.5
    };
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = [];
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create product
router.post('/products', async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;
    res.status(201).json({ message: 'Product created', id: 1 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
