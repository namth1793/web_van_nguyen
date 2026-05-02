const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.post('/', (req, res) => {
  const { ho_ten, so_dien_thoai, noi_dung } = req.body;
  if (!ho_ten || !so_dien_thoai) return res.status(400).json({ error: 'Vui lòng điền đầy đủ thông tin' });
  const stmt = db.prepare('INSERT INTO contacts (ho_ten, so_dien_thoai, noi_dung) VALUES (?, ?, ?)');
  const result = stmt.run(ho_ten, so_dien_thoai, noi_dung || '');
  res.json({ success: true, id: result.lastInsertRowid, message: 'Yêu cầu tư vấn đã được gửi thành công!' });
});

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all();
  res.json(rows);
});

module.exports = router;
