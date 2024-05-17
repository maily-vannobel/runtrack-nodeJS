// POINT D'ENTRÉE DU SITE WEB

const express = require('express');

const app = express();

// Définir une route de base
app.get('/', (req, res) => {
  res.send('Hello');
});

const port = 80;
app.listen(port, () => {
  console.log(`Le serveur écoute sur http://localhost:${port}`);
});