// Dependencies: Express
var express = require('express');
var router = express.Router('../burger/server.js');

// burger.js pull
var burger = require('../models/burger.js');


// GET/POST/PUT Request go here
app.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var getBurger = {
      burgers: data
    };

    res.render('index', getBurger);
  });
});

app.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

app.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// sends to server.js
module.exports = router;
