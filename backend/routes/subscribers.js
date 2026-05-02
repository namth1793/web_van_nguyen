const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.post('/', (req, res) => {
  const { email, gioi_tinh } = req.body;
  if (!email) return res.status(400).json({ error: 'Vui lòng nhập email' });
  try {
    const stmt = db.prepare('INSERT INTO subscribers (email, gioi_tinh) VALUES (?, ?)');
    stmt.run(email, gioi_tinh || 'nam');
    res.json({ success: true, message: 'Đăng ký nhận tin thành công!' });
  } catch {
    res.status(400).json({ error: 'Email đã được đăng ký' });
  }
});

module.exports = router;
