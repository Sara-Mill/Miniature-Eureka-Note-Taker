const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const fs = require('fs')

// GET Route for retrieving all the notes
notes.get('/notes', (req, res) => {
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };
    fs.readFile('./db/notes.json', 'utf8', function (err, data){
      var jsondata = JSON.parse(data)

      jsondata.push(req.body)
     fs.writeFile('./db/notes.json', JSON.stringify(jsondata), function(err){if (err) throw err}
     )
    })
    
    //fs.writeFile(newNote, JSON.stringify(newNote))
    
    // readAndAppend('./db/notes.json', function (err, newNote) {
    //   const json = JSON.parse(req.body)
    //   json.push('newNote' + newNote)

      //fs.writeFile("results.json", JSON.stringify(json))
    // });
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;