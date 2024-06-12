const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const chairRouter = require('./routers/chairRouter');
const tokensRouter = require('./routers/tokens.router');
const authRouter = require('./routers/auth.router');

const app = express();

app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/tokens', tokensRouter);
app.use('/api/auth', authRouter);
app.use('/api/chairs', chairRouter);

module.exports = app;
