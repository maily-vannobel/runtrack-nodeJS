const { URL, URLSearchParams } = require("url");

const myURL = new URL("https://www.google.com&search=nodejs");
console.log(`DÉTAILS DE L'URL`)
console.log(`Adresse de l'URL :  ${myURL.href}`); 
console.log(`Protocole de l'URL : ${myURL.protocol}`); 
console.log(`Hôte de l'URL : ${myURL.host}`); 
console.log(`Nom d'hôte de l'URL : ${myURL.hostname}`); 
console.log(`Chemin d'accès de l'URL : ${myURL.pathname}`); 
console.log(`Chaîne de requête de l'URL : ${myURL.search}`);


// ----- 2 arguments: chemin d'accès et nouvelle chaîne d'URL
//myURL.pathname: RECUP NOUVEAU LIEN ET REMPLANCE ANCIEN
const newURL = new URL(myURL.pathname, "https://www.laplateforme.io?lang=fr"); 
newURL.search = myURL.search; //.search : copier chaîne de requête de l'URL
console.log(`Protocole de la nouvelle URL : ${newURL.protocol}`);
console.log(`Nouvelle URL : ${newURL.toString()}`);

const params = new URLSearchParams(newURL.search);
params.append("lang", "fr");
newURL.search = params.toString();
console.log(newURL.toString());
console.log(params); 

console.log("");