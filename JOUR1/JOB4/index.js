// Importation des modules nécessaires de Node.js
const fs = require('fs').promises; // 'fs.promises' pour utiliser la version Promise de 'fs'
const path = require('path'); // 'path' pour manipuler les chemins de fichiers

async function listDirectories() {
  try {
    // Utilisation de '__dirname' pour obtenir le chemin complet du répertoire où le script est exécuté
    // 'path.join(__dirname, '..')' remonte d'un niveau dans l'arborescence des dossiers
    const parentDirectory = path.join(__dirname, '..');

    // Lecture des entrées du répertoire parent avec 'fs.readdir'
    // '{ withFileTypes: true }' permet de récupérer les objets 'Dirent' qui offrent plus d'informations sur chaque entrée
    const files = await fs.readdir(parentDirectory, { withFileTypes: true });

    // Filtrage des entrées pour ne conserver que les dossiers
    // 'dirent.isDirectory()' vérifie si l'entrée est un dossier
    const directories = files.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);

    // Affichage des noms des dossiers séparés par des virgules
    console.log(`Contenu du répertoire courant : ${directories.join(', ')}`);
  } catch (err) {
    // Gestion des erreurs en cas de problème lors de la lecture du répertoire
    console.error('Erreur lors de la lecture du répertoire :', err);
  }
}

// Appel de la fonction pour exécuter le script
listDirectories();
