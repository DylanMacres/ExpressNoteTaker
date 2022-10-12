
//boiler plate for making the routes accessible
const express = require('express');
const router = express.Router();
const path = require('path');



//if the url is in /notes it will show the notes html page
router.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

//gathers the data from the notes 
router.get('/api/notes', (req,res) => {
    res.json(notes)
});



//added a catch all if the code gets this far without being executed
router.get('*', (req, res) => 
res.sendFile(path.join(__dirname,'../public/index.html'))
);

module.exports = router; 