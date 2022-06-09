const express = require('express');

const app = express();

const trovo = require('./routes/trovo');

app.use('/trovo', trovo);

module.exports = app;
