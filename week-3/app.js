const express = require('express');
const app = express();

//Assignment 1
// sends Hello message when launched
app.get('/', (request, response) => {
    response.send('Hello my server!');
});

//Assignment 2
// When user enter ​http://localhost:3000/getData​ in a browser’s address bar, 
// show "Lack of Parameter" message in the page.
app.get('/getData', (request, response) => {
    response.send('Lack of Parameter!');
});

app.listen(3000);