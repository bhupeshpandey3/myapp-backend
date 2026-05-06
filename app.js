const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'backend', version: process.env.APP_VERSION || 'local' });
});

app.get('/api/items', (req, res) => {
  res.json({ items: [{ id: 1, name: 'Item A' }, { id: 2, name: 'Item B' }] });
});

app.listen(PORT, () => console.log(`Backend listening on :${PORT}`));
