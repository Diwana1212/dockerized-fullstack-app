const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
  res.send({ message: "Hello from Node.js Backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});