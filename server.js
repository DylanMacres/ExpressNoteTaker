
//requiring my neccessities 
const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json');


//package for unique ids 
let uniuqeId = require('generate-unique-id')

const newId = uniuqeId({
    length:16,
    useLetters: false,
});

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



app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});


//gathers the data from the notes 
app.get('/api/notes', (req,res) => {
    let readfiledb = fs.readFileSync(db);
   readfiledb = JSON.parse(readfiledb); 
    res.json(readfiledb)

    let note = {
        title: req.body.title,
        id: newId(),
        text: req.body.text,
    };
    readfiledb.push(note);
    fs.writeFileSync(db, JSON.stringify(readfiledb));
    res.json(readfiledb)
});

//same get response but with unique id assigned
app.get('/api/notes/:id', (req,res) => {
    res.json(db)
});

// app.post("/api/notes", (req,res) => {
//     urlId = 

// })


//all the webage code to make sur we get the right page
// if the url is in /notes it will show the notes html page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//gathers the data from the notes 




//added a catch all if the code gets this far without being executed
app.get('*', (req, res) => 
res.sendFile(path.join(__dirname,'/public/index.html'))
);


app.use(require('./routes'));


//link to the http for the server
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`)
);