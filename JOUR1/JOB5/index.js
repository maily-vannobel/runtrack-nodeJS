const fs = require('fs').promises; // 'fs.promises' pour utiliser la version Promise de 'fs'
const path = require('path'); 

const filePath = '../JOB5/index.js';

const fileName = path.basename(filePath);
console.log('Nom du fichier :', fileName);

const fileExt = path.extname(filePath);
console.log('Extension du fichier :', fileExt);

const parentDir = path.dirname(filePath);
console.log('Répertoire parent :', parentDir);