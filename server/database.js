const {Client} = require('pg');

const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'TodoApp',
    password: '0000',
    port: '5432'
});

db.connect();

module.exports = db;