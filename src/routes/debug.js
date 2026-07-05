const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/lookup', (req, res) => {
  const query = "SELECT * FROM users WHERE name = '" + req.query.name + "'";
  db.query(query, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

router.post('/filter', (req, res) => {
  const result = eval(req.body.expression);
  res.json({ result });
});

module.exports = router;
