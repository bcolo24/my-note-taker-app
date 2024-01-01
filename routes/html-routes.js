const htmlRoute = require('express').Router();
const path = require('path');

// const htmlRoute = require('express').Router();
// Import helper functions and dependencies
// Helper functions for reading and writing to the JSON file
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js');

//GET Route for retrieving all the notes
htmlRoute.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
//   console.info(`${req.method} request received for html`);
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST Route for a new UX/UI note
htmlRoute.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
  });

module.exports = htmlRoute;