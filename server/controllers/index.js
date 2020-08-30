/*eslint-disable*/
var models = require("../models");
//const { messages } = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function (err, results) {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
      //res.status(200).send(message);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.roomname, req.body.text, req.body.username];
      var users = [req.body.username];
      models.messages.post(params, users, function (err) {
        if (err) {
          res.send(err);
          //여기에 send(404)를 써주니까 head에러가 발생했다. 그 이유는 send 하고 난 이후에 아래에서 다시 status설정해주는 코드가 나온느데 send 이후로는 헤더 작성이 불가능하다.
          //=> 결국 센드 진행함 하지만, 헤더 설정을 해주고 나서, send를 해줘야 한다. 그리고 if구문으로 헤더설정했으면, 밑에 else로 빼줘야한다. 지금은 헤더가 두번설정되고 있다
        } else {
          //res.sendStatus(201)
          res.send(201).json({ id: 0 }); // 보내주는 데이터를 json 처리를 해주는 것이 핵심. 보통은 id 값을 기준으로 불러와서 해주는데 이것이 정답은 아니다.
        }
      });
      //res.status(201).send('success');
    }, // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(function (err, results) {
        if (err) {
          res.send(err);
        }
        res.json(results);
      });
      //res.status(200).send(user);
    }, // a function which handles a get request for all users
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function (err) {
        if (err) {
          res.send(err);
        } else {
          res.sendStatus(201);
        }
      });
      //res.status(201).send('success');
    }, // a function which handles posting a user to the database
  },
};
