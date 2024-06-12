const express = require('express');
const router = express.Router();
const pool = require('../database');
const authenticateToken = require('../middleware/authorize'); // Assuming you have a middleware for JWT authentication

// Get all products for the logged-in user
router.get('/', authenticateToken, async (req, res) => {
    const email = req.user.email; // The email of the currently logged-in user

    try {
        const result = await pool.query('SELECT * FROM Products WHERE email = $1 OR email IS NULL', [email]);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
