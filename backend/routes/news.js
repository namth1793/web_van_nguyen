const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit) || 8;
  const rows = db.prepare('SELECT * FROM news ORDER BY created_at DESC LIMIT ?').all(limit);
  res.json(rows);
});

router.get('/:slug', (req, res) => {
  const row = db.prepare('SELECT * FROM news WHERE slug = ?').get(req.params.slug);
  if (!row) return res.status(404).json({ error: 'Không tìm thấy' });
  res.json(row);
});

module.exports = router;
