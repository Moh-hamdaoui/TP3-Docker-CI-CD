const express = require('express');
const appRouter = require('./routes/app-router');

const app = express();

app.use(appRouter);

console.log('Hello, world!');


module.exports = app;
