const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/LaPlateforme');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to LaPlateforme database");
});

// STUDENT SCHEMA
const studentSchema = new mongoose.Schema({
  lastname: String,
  firstname: String,
  students_number: String,
});

// STUDENT MODEL
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
        students_number: "12n",
      }
  ];
  
  Student.insertMany(newStudents)
    .then(() => console.log('Students saved successfully'))
    .catch(err => console.error('Error while saving students: ', err));



    