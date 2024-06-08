// routes/users.js
const express = require('express');
const router = express.Router();
const db = require('../database/index.js');

// Get all users
router.get('/', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM users');

        // Print the fetched data to the console
        console.log(rows);

        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
