// Dependencies
const notes = require('express').Router();
const path = require('path');

//Routing
    //When user visits notes page
    notes.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    //When user visits homepage
    notes.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

module.exports = notes;
