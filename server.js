const express = require('express');
const path = require('path');

const html_routes = require('./routes/html-routes')
const api_routes = require('./routes/api-routes')

// Helper method for generating unique ids
const uuid = require('./helpers/uuid.js');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(html_routes)
app.use(api_routes)

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET Route for notes page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});