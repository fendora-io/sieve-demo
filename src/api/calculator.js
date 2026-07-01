const express = require('express');
const router = express.Router();

// Expression calculator endpoint
router.post('/calculate', (req, res) => {
  const { expression } = req.body;
  try {
    const result = eval(expression);
    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: 'Invalid expression' });
  }
});

module.exports = router;
