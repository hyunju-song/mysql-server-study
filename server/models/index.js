/*eslint-disable*/
var db = require('../db');
//const connection = require('../db');

//참고!! https://m.blog.naver.com/PostView.nhn?blogId=magnking&logNo=221170198329&proxyReferer=https:%2F%2Fwww.google.com%2F


module.exports = {
  messages: {
    get: function (callback) {
     var queryStr = `SELECT messages.id, messages.text, messages.roomname, users.username FROM messages
        LEFT OUTER JOIN users ON (messages.users_id = users.id) order by messages.id desc`;
      db.query(queryStr, (error, results) => {
          callback(error, results)
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = `INSERT INTO messages(roomname, text, users_id)  VALUE (?, ?,(select id from users where username = ? limit 1))`;
      db.query(queryStr, params, (error,results) => {
        callback(error,results);
    });
    console.log(params)
    }
     // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    //db와 모델 연결 후 sql 보여주기
    get: function (callback) {
      var queryStr = `SELECT * from users`;
       db.query(queryStr, (error, results) => {
          callback(error, results)
      });
    },
    post: function (params, callback) {
      var queryStr = `INSERT INTO users(username) VALUE (?)`;
      db.query(queryStr, params, (error,results) => {
        callback(error,results)
    })
  }
}

};

//레퍼런스코드
// module.exports = {
//   messages: {
//     get: function(callback) {
//       // fetch all messages
//       // text, username, roomname, id
//       var queryStr = `select messages.id, messages.text, messages.roomname, users.username
//         from messages left outer join users on (messages.userid = users.id)
//         order by messages.id desc`;
//       db.query(queryStr, function(err, results) {
//         callback(err, results);
//       });
//     },
//     post: function(params, callback) {
//       // create a message for a user id based on the given username
//       var queryStr = `insert into messages(text, userid, roomname)
//                       value (?, (select id from users where username = ? limit 1), ?)`;
//       db.query(queryStr, params, function(err, results) {
//         callback(err, results);
//       });
//     }
//   },
//   users: {
//     get: function(callback) {
//       // fetch all users
//       var queryStr = "select * from users";
//       db.query(queryStr, function(err, results) {
//         callback(err, results);
//       });
//     },
//     post: function(params, callback) {
//       // create a user
//       var queryStr = "insert into users(username) values (?)";
//       db.query(queryStr, params, function(err, results) {
//         callback(err, results);
//       });
//     }
//   }
// };

