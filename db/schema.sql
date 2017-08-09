-- da_burgers_db --
CREATE DATABASE da_burgers_db;
USE da_burgers_db;
-- tables layout for database --
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);
