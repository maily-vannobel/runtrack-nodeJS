const fs = require('fs');

// FACON SYNCHRONE
const fileContent = fs.readFileSync('data.txt', 'utf-8');

console.log('Contenu du fichier data.txt :', fileContent);