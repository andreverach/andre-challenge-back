import * as functions from 'firebase-functions';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hola, una aplicación express con typescript desde cloud-functions!');
});

exports.api = functions.https.onRequest(app);
