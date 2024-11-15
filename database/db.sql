CREATE DATABASE IF NOT EXISTS mydatadb;
USE mydatadb;
CREATE TABLE user (
    id INT(11) NOT NULL AUTO_INCREMENT,
    userName VARCHAR(45) NOT NULL,
    password VARCHAR(8) NOT NULL,
    PRIMARY KEY(id)
);

DESCRIBE user;

INSERT INTO user values 
  (1, 'Ryan Ray', "password"),
  (2, 'Joe McMillan', "password"),
  (3, 'John Carter', "password");

SELECT * FROM user;