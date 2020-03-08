DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;
USE company_db;

-- Create the table actors.
CREATE TABLE employees (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO employees (name) VALUES ("Jerry");
INSERT INTO employees (name) VALUES ("Elaine");
INSERT INTO employees (name) VALUES ("Kramer");
INSERT INTO employees (name) VALUES ("George");