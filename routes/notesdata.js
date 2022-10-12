//boiler plate for making the routes accessible
const { json } = require('express');
const express = require('express');
const { fstat } = require('fs');
const router = express.router();
const path = require('path');
let dbFile = require("../db/db.json");




//gathers the data from the notes 
app.get('/api/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});


//data from the specific id notation
app.get('/api/notes/:id', (req, res) => {
    res.json(notes)
});

app.post("/api/notes", (req, res) => {
  let db = fs.readFileSync('../db/db.json');
  db = json.parse(db)
    res.json(db)
    let newNote = {
        id: uniqID(),
        title: req.body.title,
        text: req.body.text,
    };
    db.push(newNote);
    fs.WriteFileSync("../db/db.json",JSON.stringify(db));
    res.json(db);
});

app.delete("/api/nots/:id", (req,res) => {
    const deleted =req.params.id;
    const notes = JSON.parse(fs.readFileSync("../db/db.json"));
    const newNote = [];
    

})