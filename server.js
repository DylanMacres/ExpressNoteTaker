
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
app.use('/', routes );


//makes the html webpage static 
app.use(express.static('public'));



app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

