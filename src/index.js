// src/index.js
const express = require('express');
const chemformations = require('../data/chemformations.json');
const users         = require('../data/users.json');
const roles         = require('../data/roles.json');
const requests      = require('../data/ai_requests.json');

const app = express();
const port = process.env.PORT || 3000;

// 1) Search chemformations
app.get('/api/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const results = chemformations.filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.tags.some(tag => tag.toLowerCase().includes(q))
  );
  res.json(results);
});

// 2) List users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// 3) List roles
app.get('/api/roles', (req, res) => {
  res.json(roles);
});

// 4) List AI request history
app.get('/api/requests', (req, res) => {
  res.json(requests);
});

// Start server
app.listen(port, () => {
  console.log(`⚗️  Chemformation mock API listening on http://localhost:${port}`);
});
