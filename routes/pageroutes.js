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