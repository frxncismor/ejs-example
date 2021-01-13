// Imports
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 5000;

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));

// Set Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/full-width');
app.set('view engine', 'ejs');

// Navigation 
app.get('',(req, res) => {
    res.render('index', {title: 'Home Page'});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Page', layout: './layouts/sidebar'});
});

// Listen on port 5000
app.listen(port, () => console.info(`App listening on port ${port}`));