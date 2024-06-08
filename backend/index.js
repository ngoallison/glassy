// index.js
require('dotenv').config({ path: '../.env' });
const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/users', usersRouter);

console.log('Starting Express server...');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log('Express server started successfully.');
});
