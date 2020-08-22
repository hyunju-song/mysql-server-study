var controller = require('./controllers');
var router = require('express').Router();
var cors = require('cors');

var express = require('express');
var app = express();

app.use(cors());

//cors
var corsOptions = {    
  methods: 'GET, PUT, POST, OPTIONS',    
  allowedHeaders: 'Content-Type, Accept',    
  maxAge: 10,
  origin: process.env.CORS_ORIGIN || '*'
};

//Connect controller methods to their corresponding routes
router.get('/', cors({origin: 'http://localhost:3000/classes'}), (req, res) => {res.send('cors!')});

router.get('/messages', cors(corsOptions), controller.messages.get);

router.post('/messages', cors(corsOptions), controller.messages.post);

router.get('/users', cors(corsOptions), controller.users.get);

router.post('/users', cors(corsOptions), controller.users.post);


module.exports = router;

