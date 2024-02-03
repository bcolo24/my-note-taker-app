const api = require('express').Router();

// Helper function to generate unique ids
const uuid = require('../helpers/uuid');

// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route for retrieving the notes
api.get('/api/notes', async (req, res) => {
    console.info(`${req.method} request received for notes`);

    readFromFile('./db/db.json', 'utf8').then((data) => res.json(JSON.parse(data)));
});

// POST route for submitting notes
api.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to submit notes`);

    // assignment for the items in req.body
    const { text, title } = req.body;

    // If all the required properties are present
    if (text && title) {
        // Variable for the object will save
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});

module.exports = api;