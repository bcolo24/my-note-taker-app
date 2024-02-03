const express = require('express');
const path = require('path');

const html_routes = require('./routes/html-routes')
const api_routes = require('./routes/api-routes')

// Helper method for generating unique ids
const uuid = require('./helpers/uuid.js');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(html_routes)
app.use(api_routes)
app.use(express.static(__dirname + '/public'))

// GET Route for notes page
app.get('/feedback', (req, res) =>{
    try {
    // handling the /feedback route
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  } catch (err) {
    next(err); // Pass the error to the error handler
  }
});

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// In case of error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});