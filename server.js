
//requiring my neccessities 
const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json');


//boiler plate code
//and the port number that im using 
const PORT = process.env.PORT || 3001; 
const app = express()

//boiler plate code

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/', routes );


//makes the html webpage static 
app.use(express.static('public'));


//if the url is in /notes it will show the notes html page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//gathers the data from the notes 
app.get('/api/notes', (req,res) => {
    res.json(notes)
});



//added a catch all if the code gets this far without being executed
app.get('*', (req, res) => 
res.sendFile(path.join(__dirname,'/public/index.html'))
);

//link to the http for the server
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`)
);