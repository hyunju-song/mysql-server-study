/*eslint-disable*/
var models = require('../models');
//const { messages } = require('../models');


module.exports = {

  messages: {
    get: function (req, res) {
      let message = models.messages.get();
      res.status(200).send(message);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      const { body } = req;
      models.postMessageModels(body);
      res.status(201).send('success');
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      let user = models.users.get();
      res.status(200).send(user);
    }, // a function which handles a get request for all users
    post: function (req, res) {
      const { body } = req;
      models.postMessageModels(body);
      res.status(201).send('success');
    } // a function which handles posting a user to the database
  }
};

