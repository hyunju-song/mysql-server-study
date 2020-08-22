DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE users (
  id int NOT NULL auto_increment PRIMARY KEY,
  username varchar(255) 
);

CREATE TABLE messages (
  id int NOT NULL auto_increment PRIMARY KEY,
  users_id int,
  roomname varchar(255),
  text varchar(255)
);

  
DESC users;
DESC messages;