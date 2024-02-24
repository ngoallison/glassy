const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

// Define routes

// Hello World route
router.get('/', (req, res) => {
    res.send('Hello World');
});

// Get planets from MongoDB Atlas
router.get('/planets', async (req, res) => {
    try {
        const db = req.dbClient.db(req.dbName);
        const planets = await db.collection('planets').find().toArray();
        res.json(planets);
    } catch (err) {
        console.error('Error fetching planets:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
