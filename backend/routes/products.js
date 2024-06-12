const express = require('express');
const router = express.Router();
const pool = require('../database');
const authenticateToken = require('../middleware/authenticateToken');

// Get all products for the logged-in user
router.get('/', authenticateToken, async (req, res) => {
    const id = req.user.id; // The ID of the currently logged-in user
    console.log("heya");
    console.log(id);
    console.log("bya");
    try {
        // const result = await pool.query('SELECT * FROM public."Products" WHERE user_id = $1 OR user_id IS NULL', [id]);
        const result = await pool.query('SELECT * FROM public."Products" WHERE user_id = $1 OR user_id IS NULL', [id]);

        console.log(result.rows);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/add', authenticateToken, async (req, res) => {
    const { name, brand, category, price, rating, features, photo } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO public."Users" (name, brand, category, price, rating, features, photo) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [name, brand, category, price, rating, features, photo]
        );
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;
