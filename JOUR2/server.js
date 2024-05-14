// CONTIENT LA CONFIGURATION DU SERVEUR AINSI QUE LE DÉMARRAGE

import http from 'http';
import { handleRequest } from './routes.js';

const port = 3000;

const server = http.createServer((req, res) => {
  handleRequest(req, res);
});

server.listen(port, () => {
  console.log(`Le serveur tourne sur: http://localhost:${port}`);
});

export default server;
