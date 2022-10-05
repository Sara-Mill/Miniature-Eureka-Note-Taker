const express = require('express');
const fs = require('fs');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


const app = express();

const PORT = 3001;

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//get route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

//get route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//set api notes
app.get('/api/notes', (req, res) => {
    return res.json(dbJSON);
});

//post routes
app.post('api/notes', (req, res) => {
    const newNote = {...req.body, id: randomUUID() 
    };
    fs.writeFile(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(dbJSON, null, 2),
        (err) => {
            if (err) {
                return res.json({error: 'error writing to file'});
            }
            return req.json(newNote);
        }
    );
});


//sets local port for listening
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);