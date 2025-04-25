const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  await pool.query('INSERT INTO users(name, email) VALUES($1, $2)', [name, email]);
  res.send({ success: true });
});

app.get('/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
