const express = require('express');
const path = require('path');

const homeRoutes = require('./routes/homeRoutes');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/', homeRoutes);

app.use((req, res) => {
  res.status(404).send('Page not found');
});

module.exports = app;
