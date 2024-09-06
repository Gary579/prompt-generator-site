const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'generator_v14.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});