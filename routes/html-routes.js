const htmlRoute = require('express').Router();
const path = require('path');

//GET Route for retrieving all the notes
htmlRoute.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//POST Route for a new UX/UI note
htmlRoute.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
  });

module.exports = htmlRoute;