const express = require('express');
const router = express.Router();

// Get user profile
router.get('/profile', async (req, res) => {
  try {
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      address: '123 Main St'
    };
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
