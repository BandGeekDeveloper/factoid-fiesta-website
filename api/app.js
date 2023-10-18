// require mongo driver
const MongoClient = require('mongodb').MongoClient;

// express import
const express = require('express');
const app = express();

// import config
require('dotenv').config();

// set config variables
const port = process.env.PORT || 3000; // 27017 is the default port for mongodb connections
const uri = process.env.URI;

// middleware

// Listen on port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);

  connectToServer(uri);
});

const connectToServer = (uri) => {
  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      if (err) {
        console.error('Error connecting to server:', err);
        return;
      }
      console.log('Connected to server');

      client.close();
    }
  );
};
