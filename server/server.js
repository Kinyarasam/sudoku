#!/usr/bin/env node

const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes/index');

/* Load the environment configs */
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// `app.use(express.static('.', { index: index.html }));

app.get('/', routes);

/**
 * @function start - Start an express serve
 * @listens
 * @param PORT - The port to listen for.
 * @returns nothing.
 */
const start = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};

start();
