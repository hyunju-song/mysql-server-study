/*eslint-disable*/
var models = require('../models');
//const { messages } = require('../models');


module.exports = {

  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results){
        if(err){
          res.send(err)
        }
        res.json(results)
      });
      //res.status(200).send(message);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // const { body } = req;
      var params = [req.body.username, req.body.roomname, req.body.text]
      models.messages.post(params, function(err){
        if(err){
          res.send(err)
        }
        res.sendStatus(201)
      });
      //res.status(201).send('success');
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err,results){
        if(err){
          res.sedn(err);
        }
        res.json(results)
      });
      //res.status(200).send(user);
    }, // a function which handles a get request for all users
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err){
        if(err){
          res.send(err)
        }
        res.sendStatus(201)
      });
      //res.status(201).send('success');
    } // a function which handles posting a user to the database
  }
};


