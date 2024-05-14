// GET my-api-user/1
// PUT my-api/profil

// CONTIENT L'ENSEMBLE DES ROUTES DE L'API 

import fs from 'fs';
import path from 'path';
import url from 'url';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataPath = path.join(__dirname, 'data.json');

//LIRE DONNÉES DU JSON ASYNCHRONE
const readData = async () => {
    try {
        const jsonData = await fs.promises.readFile(dataPath, 'utf-8')
        return JSON.parse(jsonData);
    } catch (error) {
        console.error('Erreur pour lire les donnés:', error);
        throw error;
      }
    };

// ÉCRIRE DANS LE JSON
const writeData = async (data) => {
    try {
        //convertit données 
        const jsonData = JSON.stringify(data, null,2)
        await fs.promises.writeFile(dataPath, jsonData, 'utf-8');
    } catch (error) {
      // Gérer les erreurs d'écriture de fichier
      console.error('Error writing data:', error);
      throw error;
    }
  };

  //GÉRÉR REQUETES HTTP
  const handleRequest = async (req, res) => {
    //analyser url de la requête 
    const parsedUrl = url.parse (req.url, true)
   // Obtenir la méthode HTTP de la requête (GET, POST, PUT, DELETE)
    const method = req.method;
    // Obtenir le chemin de la requête (pathname)
    const pathname = parsedUrl.pathname;
    console.log(`Requête reçue: ${method} ${pathname}`);

    if (pathname === '/tasks' && method === 'GET') {
        try {
          const tasks = await readData();
          console.log('Tasks read successfully:', tasks);

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(tasks));
        } catch (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Erreur interne du serveur');
        }
      } else if (pathname === '/tasks' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            const newTask = JSON.parse(body);
            const tasks = await readData();
            tasks.push(newTask);
            await writeData(tasks);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newTask));
          } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur interne du serveur');
          }
        });
    } else if (pathname === '/tasks' && method === 'PUT') {

      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route non trouvée');
      }
    };
    
    export { handleRequest };

