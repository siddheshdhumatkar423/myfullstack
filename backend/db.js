const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'myapp',
  password: 'yourpassword', // change this
  port: 5432,
});

module.exports = pool;
