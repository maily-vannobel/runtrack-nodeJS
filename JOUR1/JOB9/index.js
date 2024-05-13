const fs = require('fs').promises;

async function modifyFile() {
  try {
    const newContent = 'Je manipule les fichiers avec un module node !';
    await fs.writeFile('data.txt', newContent);
    console.log(newContent);
  } catch (error) {
    console.error(`Erreur lors de la modification du fichier : ${error.message}`);
  }
}

modifyFile();