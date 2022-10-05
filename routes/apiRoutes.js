const notes = require('express').Router();
const { randomUUID } = require('crypto');
const fs = require('fs');
let db = require('../db/db.json');


// GET Route for retrieving notes
notes.get('/notes', (req, res) =>
  readFromFile('./db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
notes.post('/notes', (req, res) => {
  let newNote = {
    id: randomUUID,
    title: req.body.title,
    text: req.body.text
  }

  db.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(db), (err, res) => {
    if(err) throw err;
  });

  res.json(db);

});

  
module.exports = notes;
