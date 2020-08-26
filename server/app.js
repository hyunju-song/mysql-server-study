/*eslint-disable */

var express = require('express');
//var db = require('./db');


// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
// Set up our routes
app.use('/classes', router);

// Serve the client files
//클라이언트 받아오는 모듈 중요!!!!!!!!!//
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}


//앱.js -> 클라이언트 -> 컨트롤러 -> 모델 -> DB * SQL
