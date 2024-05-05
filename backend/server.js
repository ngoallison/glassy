const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file
const app = express();

// Import routes from router.js
const routes = require('./router');

// Use JSON middleware
app.use(express.json());

// MongoDB connection URI
const mongoURI = process.env.REACT_APP_MONGODB_URI
const dbName = process.env.REACT_APP_DB_NAME

// Connect to MongoDB Atlas
const client = new MongoClient(mongoURI);

client.connect()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Pass MongoDB client to routes
app.use((req, res, next) => {
    req.dbClient = client;
    req.dbName = dbName;
    next();
});

// Use routes from router.js
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
