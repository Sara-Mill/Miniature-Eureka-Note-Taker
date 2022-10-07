const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const fs = require('fs')
const noteshtml = require('../public/index')
const db = require('../db/notes.json');

let id = db.length + 1;

      // GET Route for retrieving all the notes
      notes.get('/notes', (req, res) => {
      res.json(db)
      });

      // POST Route for adding a new note
      notes.post('/notes', (req, res) => {
        console.log(req.body);

        req.body.id = id++;
        console.log(req.body);

        db.push(req.body);
        fs.writeFile('./db/notes.json', JSON.stringify(db), function (err) {
          if (err) throw err;
          res.json(db);
        });
      });

      //Delete a note based on specific id
      notes.delete('/notes/:id', function (req, res) {
        let id = parseInt(req.params.id);

        for (let i =0; i <db.length; i ++) {
          if (db[i].id === id) {
            db.splice(i, 1);
          }
        }
        console.log(db);

        fs.writeFile('./db/notes.json', JSON.stringify(db), function (err) {
          if (err) throw err;
          res.json(db);
        });
      });
   
module.exports = notes;