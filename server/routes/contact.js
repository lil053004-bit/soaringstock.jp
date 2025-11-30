import express from 'express';
import db from '../database/sqlite.js';
import { randomUUID } from 'crypto';

const router = express.Router();

router.post('/submit', async (req, res) => {
  try {
    const { name, email, inquiry_type, message } = req.body;

    if (!name || !email || !inquiry_type || !message) {
      return res.status(400).json({
        error: 'すべての必須項目を入力してください'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'メールアドレスの形式が正しくありません'
      });
    }

    const id = randomUUID();

    const stmt = db.prepare(`
      INSERT INTO contacts (id, name, email, inquiry_type, message, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, 'new', datetime('now'), datetime('now'))
    `);

    stmt.run(id, name, email, inquiry_type, message);

    res.status(201).json({
      success: true,
      message: 'お問い合わせを受け付けました'
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      error: 'お問い合わせの送信に失敗しました'
    });
  }
});

router.get('/list', async (req, res) => {
  try {
    const contacts = db.prepare(`
      SELECT id, name, email, inquiry_type, message, status, created_at, updated_at
      FROM contacts
      ORDER BY created_at DESC
      LIMIT 100
    `).all();

    res.json({ contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      error: 'お問い合わせの取得に失敗しました'
    });
  }
});

router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'in_progress', 'resolved'].includes(status)) {
      return res.status(400).json({
        error: '無効なステータスです'
      });
    }

    const stmt = db.prepare(`
      UPDATE contacts
      SET status = ?, updated_at = datetime('now')
      WHERE id = ?
    `);

    const result = stmt.run(status, id);

    if (result.changes === 0) {
      return res.status(404).json({
        error: 'お問い合わせが見つかりません'
      });
    }

    res.json({
      success: true,
      message: 'ステータスを更新しました'
    });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({
      error: 'ステータスの更新に失敗しました'
    });
  }
});

export default router;
