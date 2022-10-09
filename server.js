//Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


const app = express();

const PORT = process.env.PORT || 3002;

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Get route for html homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

//Get route for notes html page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});


//Sets local port for listening
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);