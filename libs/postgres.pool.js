const { Pool } = require('pg');


  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'nico',
    password: 'admin123',
    database: 'my_store'
  });
  await pool.connect();
  return pool;

module.exports = pool;
