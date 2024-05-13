const fs = require('fs');

// Récupérez le contenu du fichier data.txt de manière asynchrone
fs.readFile('data.txt', 'utf-8', (err, fileContent) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier :', err);
    return;
  }

  // boucle
  for (let i = 0; i < fileContent.length; i += 2) {
    process.stdout.write(fileContent[i]);
  }
  console.log();
});
