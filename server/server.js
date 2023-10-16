const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config;

const app = express();

const uri = process.env.URI;
const port = process.env.PORT || 3000;

// Middleware and Routes

// Connect to the server

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connect();

db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.log('Connected to database');

  app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });
});
