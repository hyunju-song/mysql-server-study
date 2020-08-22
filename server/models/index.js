/*eslint-disable*/
var db = require('../db');
const connection = require('../db');

//참고!! https://m.blog.naver.com/PostView.nhn?blogId=magnking&logNo=221170198329&proxyReferer=https:%2F%2Fwww.google.com%2F


module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * from messages', (error, rows) => {
          if (error) {
            throw error} 
        console.log('User info is: ', rows);
      });
    }, // a function which produces all the messages
    post: function () {
      db.query('INSERT INTO messages(users_id, roomname, text)  VALUE((select id from users where username = ? limit 1), ?, ?)', [users_id, roomname, text], (error, rows) => {
        if (error) {
          throw error}  
      console.log('User info is: ', rows);
    });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    //db와 모델 연결 후 sql 보여주기
    get: function () {
       db.query('SELECT * from users', (error, rows) => {
          if (error) {
            throw error}  
        console.log('User info is: ', rows);
      });
    },
    post: function () {
      db.query('INSERT INTO users(username) VALUE(?)', [username], (error, rows) => {
        if (error) {
          throw error}  
      console.log('User info is: ', rows);
    })
  }
}

};

