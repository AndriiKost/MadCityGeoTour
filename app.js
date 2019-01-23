const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

// Connect to DB and handle errors
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});
mongoose.connection.on('error', (err) => {
    console.log('database error '+err);
});

const app = express();

const users = require('./routes/users');
const geoObjects = require('./routes/geoObjects');

const port = process.env.PORT || 8000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'src')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Pasport's Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// Geo Obejct route
app.use('/geo-objects', geoObjects);

// Any other route redirect to the index page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
})

// Start Server
app.listen(port, () => {
    console.log('server started on port '+port);
});
