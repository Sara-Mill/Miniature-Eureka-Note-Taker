const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const PORT = 3001;

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//get route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

//get route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//sets local port for listening
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);