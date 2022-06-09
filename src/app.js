const express = require('express');
const rotas = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', rotas);

module.exports = app;
