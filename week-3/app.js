const express = require('express');
const app = express();

// Tells express what template to use
app.set('view engine', 'pug');

//Assignment 1
// sends Hello message when launched
app.get('/', (req, res) => {
    res.send('<h1>Hello my server!</h1>');
});

//Assignment 2
//  http://localhost:3000/getData​, show "Lack of Parameter" message in the page.
app.get('/getData', (req, res) => {
    res.send('Lack of Parameter!');
});


// sandbox
app.get('/sandbox', (req, res) => {
    res.render('main')
})


app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});