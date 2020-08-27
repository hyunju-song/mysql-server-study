DROP DATABASE IF EXISTS `chat`;
CREATE DATABASE `chat`;
USE `chat`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(255),
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `roomname` varchar(255),
  `text` varchar(255),
  `users_id` varchar(255),
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP
);

  

DESC messages;
