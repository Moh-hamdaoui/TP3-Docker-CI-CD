const express = require('express');
const appRouter = require('./routes/app-router');

const app = express();

app.use(appRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

module.exports = app;
