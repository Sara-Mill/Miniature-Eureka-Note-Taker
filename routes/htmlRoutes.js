// Dependencies
const app = require('express').Router();
const path = require('path');

//Routing
    //When user visits notes page
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    //When user visits homepage
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

module.exports = app;
