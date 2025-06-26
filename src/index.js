const express = require('express');
const data = require('../data/chemformations.json');

const app = express();

app.get('/api/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const results = data.filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.tags.some(tag => tag.toLowerCase().includes(q))
  );
  res.json(results);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`⚗️  Chemformation mock API listening on http://localhost:${port}`);
});
