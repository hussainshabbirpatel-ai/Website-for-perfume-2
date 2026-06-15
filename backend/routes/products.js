const express = require('express');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = [
      {
        id: 1,
        name: 'Premium Rose Perfume',
        description: 'Luxurious rose fragrance',
        price: 99.99,
        image: 'rose.jpg',
        category: 'Floral',
        stock: 50
      },
      {
        id: 2,
        name: 'Ocean Breeze',
        description: 'Fresh ocean scent',
        price: 79.99,
        image: 'ocean.jpg',
        category: 'Fresh',
        stock: 30
      }
    ];
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = {
      id: req.params.id,
      name: 'Premium Rose Perfume',
      description: 'Luxurious rose fragrance for special occasions',
      price: 99.99,
      image: 'rose.jpg',
      category: 'Floral',
      stock: 50,
      reviews: []
    };
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
