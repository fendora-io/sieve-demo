const express = require('express');
const router = express.Router();
const db = require('../db');

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
    const result = await db.query(query);
    res.json(result.rows[0] || null);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search users by name
router.get('/search', async (req, res) => {
  try {
    const name = req.query.name;
    const result = await db.query(
      `SELECT id, name, email FROM users WHERE name LIKE '%${name}%'`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
