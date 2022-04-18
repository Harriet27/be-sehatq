const express = require('express');
const cors = require('cors');
const app = express();

const defaultRouter = require('./routes/index');
const todoRouter = require('./routes/todo.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/', defaultRouter);
app.use('/todo', todoRouter);

module.exports = app;
