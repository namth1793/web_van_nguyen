const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM services ORDER BY sort_order ASC').all();
  res.json(rows);
});

router.get('/:slug', (req, res) => {
  const row = db.prepare('SELECT * FROM services WHERE slug = ?').get(req.params.slug);
  if (!row) return res.status(404).json({ error: 'Không tìm thấy' });
  res.json(row);
});

module.exports = router;
