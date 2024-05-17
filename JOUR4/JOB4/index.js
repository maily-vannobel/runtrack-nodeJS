const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/LaPlateforme');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to LaPlateforme database");
});

// YEAR SCHEMA
const yearSchema = new mongoose.Schema({
  year: {
    type: String,
    enum: ['Bachelor 1', 'Bachelor 2', 'Bachelor 3'],
    required: true
  }
});

// YEAR MODEL
const Year = mongoose.model('Year', yearSchema);

// NEW YEAR DOCUMENTS
const newYears = [
  { year: 'Bachelor 1' },
  { year: 'Bachelor 2' },
  { year: 'Bachelor 3' }
];

Year.insertMany(newYears)
  .then(() => console.log('Years saved successfully'))
  .catch(err => console.error('Error while saving years: ', err));
