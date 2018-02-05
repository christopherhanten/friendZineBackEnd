var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.connect(dbConfig.url, {
    useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

// parse requests of content-type - application/json
app.use(bodyParser.json())

// // define a simple route
// app.get('/', function(req, res){
//     res.json({"message": "friendZine. Taking out network back!"});
// });
//
// // ........
//
// // Require Notes routes
// require('./app/routes/note.routes.js')(app);
//
// // ........

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});

app.use('/api/v1/comment', users);

module.exports = app;
