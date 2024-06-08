// db/index.js
const { Pool } = require('pg');
require('dotenv').config({ path: '../../.env' });

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

console.log('Connecting to PostgreSQL database...');

module.exports = {
    query: (text, params) => pool.query(text, params),
};
