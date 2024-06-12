const express = require('express');
const router = express.Router();
const pool = require('../database');
const authenticateToken = require('../middleware/authenticateToken');

router.get('/', authenticateToken, async (req, res) => {
    const id = req.user.id; // The ID of the currently logged-in user
    try {
        const result = await pool.query('SELECT * FROM public."Progress" WHERE user_id = $1 OR user_id IS NULL ORDER BY date', [id]);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/add', authenticateToken, async (req, res) => {
    const { date, rating, notes, favorite, photos } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO public."Progress" (user_id, date, rating, notes, favorite, photos) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [req.user.id, date, rating, notes, favorite, photos]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;
