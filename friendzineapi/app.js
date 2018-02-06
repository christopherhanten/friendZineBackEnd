var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var users = require('./routes/users');

var app   = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

var dbConfig     = require('./config/database.config.js');
var mongoose     = require('mongoose');
var comments     = require('./controllers/friendZine.controller.js');
let ENV;

try {
  ENV = require('./env');
} catch (ex) {
  ENV = process.env;
}
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

mongoose.connect(ENV.MONGODB_URI);


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

app.use('/api/v1/comment', Comment);

module.exports  = app;
