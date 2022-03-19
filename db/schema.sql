DROP DATABASE bchess_db;
CREATE DATABASE bchess_db;
USE bchess_db;
CREATE TABLE IF NOT EXISTS user(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(30) NOT NULL,
    wins INT DEFAULT 0,
    );
CREATE TABLE IF NOT EXISTS matches(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    match_time INT NOT NULL,
    players SET(),
    FOREIGN KEY (players) REFERENCES user (username),
    winner VARCHAR(30)
    FOREIGN KEY (winner) REFERENCES user (username),
);