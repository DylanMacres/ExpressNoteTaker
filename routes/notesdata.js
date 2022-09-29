


//gathers the data from the notes 
app.get('/api/notes', (req,res) => {
    res.json(notes)
});


//data from the specific id notation
app.get('/api/notes/:id', (req, res) => {
    res.json(notes)
})