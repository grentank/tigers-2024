const express = require('express');
const morgan = require('morgan');
const chairRouter = require('./routers/chairRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/chairs', chairRouter);

module.exports = app;
