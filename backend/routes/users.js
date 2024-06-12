// routes/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database/index.js');

/*
Request type: GET
Function: Get current users
*/
router.get('/get', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT email FROM users');

        // Print the fetched data to the console
        console.log(rows);

        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

/*
Request type: POST
Function: Post returning user information to validate login
*/

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await db.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        const user = result.rows[0];
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

/*
Request type: POST
Function: Post new user information on account registration
*/

router.post('/register', async (req, res) => {
    const { email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    try {
        const query = 'INSERT INTO users (email, phone, password) VALUES ($1, $2, $3) RETURNING *';
        console.log('Register query:', query);  // Add this line
        const newUser = await db.query(query, [email, phone, hashedPassword]);

        const token = jwt.sign({ id: newUser.rows[0].user_id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(201).json({ email, token });

        // res.status(201).json({ message: 'woo!' });

    } catch (error) {
        console.error('Error during registration:', error);
        res.status(400).json({ error: error.message });
    }
});

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'This is a protected route' })
})

module.exports = router;
