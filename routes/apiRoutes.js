const app = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json');

let id = db.length + 1;

      // GET Route for retrieving all the notes
      app.get('/notes', (req, res) => {
      res.json(db)
      });

      // POST Route for adding a new note
      app.post('/notes', (req, res) => {

        req.body.id = id++;

        db.push(req.body);
        fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
          if (err) throw err;
          res.json(db);
        });
      });

      //Delete a note based on specific id
      app.delete('/notes/:id', function (req, res) {
        let id = parseInt(req.params.id);

        for (let i =0; i <db.length; i ++) {
          if (db[i].id === id) {
            db.splice(i, 1);
          }
        };
        console.log(db);

        fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
          if (err) throw err;
          res.json(db);
        });
      });
   
module.exports = app;