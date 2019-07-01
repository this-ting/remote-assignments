const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

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


// My Name (cookies)
app.get('/myName', (req, res) => {
    res.render('myname', {name:req.cookies.username});
});

app.post('/trackName', (req, res) => {
    res.cookie('username', req.body.username);
    res.render('myname', {name:req.body.username});
});


app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});