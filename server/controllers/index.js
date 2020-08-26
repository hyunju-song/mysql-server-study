/*eslint-disable*/
var models = require('../models');
const { messages } = require('../models');
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
      var params = [req.body.roomname, req.body.text, req.body.username]
      models.messages.post(params, function(err){
        if(err){
          res.status(404)
          //여기에 send(404)를 써주니까 head에러가 발생했다. 그 이유는 send 하고 난 이후에 아래에서 다시 status설정해주는 코드가 나온느데 send 이후로는 헤더 작성이 불가능하다.
        }
        res.sendStatus(201).end();
      })
      //res.status(201).send('success');
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err,results){
        if(err){
          res.send(err);
        }
        res.json(results)
      });
      //res.status(200).send(user);
    }, // a function which handles a get request for all users
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err){
        if(err){
          res.status(404)
        }
        res.sendStatus(201)
      });
      //res.status(201).send('success');
    } // a function which handles posting a user to the database
  }
};


