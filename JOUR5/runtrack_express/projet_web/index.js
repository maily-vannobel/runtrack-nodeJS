// POINT D'ENTRÉE DU SITE WEB

const express = require('express');
//instance d'express
const app = express();
const path = require("path");

// Définir route de base
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"));  });


// route presentation (ABOUT)
app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "about.html"));
});

//middleware
app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const port = 80;
app.listen(port, () => {
  console.log(`Le serveur écoute sur http://localhost:${port}`);
});