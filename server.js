var express        = require('express');
var path           = require('path');
//var logger         = require('morgan');
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');

var app            = express();


app.get('/', function (req, res) {
  res.send('friendZine')
});

app.listen(3000, () =>{
  console.log('listening on port 3000');
};
