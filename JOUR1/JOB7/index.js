const fs = require('fs');

// Récupérez le contenu du fichier data.txt de manière asynchrone
fs.readFile('data.txt', 'utf-8', (err, fileContent) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier :', err);
    return;
  }

  // Affichez le contenu du fichier dans le terminal
  console.log('Contenu du fichier :', fileContent);
});

