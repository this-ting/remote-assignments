const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Tells express what template to use
app.set('view engine', 'pug');

// Importing from routes/index.js
const routes = require('./routes');

app.use(routes);


app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});