DROP DATABASE IF EXISTS bchess_db;
CREATE DATABASE bchess_db;
USE bchess_db;
CREATE TABLE IF NOT EXISTS user(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(300) NOT NULL,
    wins INT DEFAULT (0)
    );
CREATE TABLE IF NOT EXISTS matches(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    match_time INT NOT NULL,
	player1 VARCHAR(30) NOT NULL,
    FOREIGN KEY (player1) REFERENCES user (username),
    player2 VARCHAR(30) NOT NULL,
    FOREIGN KEY (player2) REFERENCES user (username),
    winner VARCHAR(30) NOT NULL,
    FOREIGN KEY (winner) REFERENCES user (username)
);