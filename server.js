const express = require('express');
const http = require('http');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, MERN Full stack development batch 3 2026!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'ini adalah data dari server.' });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
}); 