const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/LaPlateforme');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to LaPlateforme database");
});

// STUDENT SCHEMA
// Un schéma Mongoose définit la structure de la collection MongoDB,
// les types de données à valider et les valeurs par défaut.
const studentSchema = new mongoose.Schema({
  lastname: String,
  firstname: String,
  students_number: String,
  year: { type: mongoose.Schema.Types.ObjectId, ref: 'Year' }

});

// STUDENT MODEL
// Les modèles Mongoose sont des constructeurs pour les documents.
// Un modèle est lié à une collection MongoDB et fournit une API pour interagir avec cette collection.
const Student = mongoose.model('Student', studentSchema);

// NEW STUDENT DOCUMENT
const newStudents = [
    {
      id: 1,
      lastname: "Doe",
      firstname: "John",
      students_number: "10",
      
    },
    {
      id: 2,
      lastname: "Le Bricoleur",
      firstname: "Bob",
      students_number: "11",
    },
    {
        id: 2,
        lastname: "Dupont",
        firstname: "Marine",
        students_number: "12",
      }
  ];
  
// Ajout nv étudiants 
Student.insertMany(newStudents)
  .then((addedStudents) => {
    console.log('Students saved successfully');
    console.log(addedStudents);
  })
  .catch(err => console.error('Error while saving students: ', err));


    