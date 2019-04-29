var express = require('express');
// import the built-in path module
const path = require('path');
var app = express();
app.get('/', (req, res, next) => {
    res.send('Hello world')
})

// a json file respone 
app.get('/json', (req, res, next) => {
    const data = {
        greeting : "hello",

    } 
    res.json(data)
}) // try it out by opening localhost:3000/json

        // an html page

// setting the views directory to views dir 
app.set('views', path.join(__dirname, 'views'))
//set the view engine to the mustache 
app.set('view engine', 'mustache')
//specify the hogan-middleware for the express config
app.engine('mustache', require('hogan-middleware').__express)

app.get('/home', (req, res, next) => {
    res.render('home', null)
})

app.listen(3000);