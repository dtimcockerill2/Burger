-- checks to see if burgers_db exists already, and gets rid of it if it does to avoid duplicates.
DROP DATABASE if EXISTS burgers_db;
-- makes database
CREATE DATABASE burgers_db;
-- goes into burgers_db for future commands
USE burgers_db;

CREATE TABLE burgers {
    id INT AUTO_INCREMENT NOT NULL,
    burger_name varchar(50) NOT NULL,
    devoured BOOLEAN
};

