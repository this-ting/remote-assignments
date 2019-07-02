const express = require('express');
const router = express.Router();

//Assignment 1: Set up web server
router.get('/', (req, res) => {
    res.send('<h1>Hello my server!</h1>');
});

//Assignment 2: /getData
router.get('/getData', (req, res) => {
    const number = req.query.number;
    if (req.query.number === 'xyz') {
        res.send('Wrong Parameter');
    }else if (req.query.number === '10') {
        res.send('The output is 55');
    }else if (number){
        res.send('1+2+...+' + number);
    }else {
        res.send('Lack of Parameter');
    };
});

// Assignment 4: /myName (Cookies)
router.get('/myName', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('myname', {name})
    } else {
        res.redirect('/trackName');
    };
});

router.post('/myName', (req, res) => {
    const name = req.cookies.username;
    res.cookie('username', req.body.username);
    res.render('myname', {name})
});

router.post('/trackName', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/myName');
});

router.get('/trackName', (req, res) => {
    res.render('trackname');
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username', '/myName');
    res.redirect('/myName');
});

module.exports = router;