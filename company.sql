DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;
USE company_db;

-- Create the table actors.
CREATE TABLE employee (
  id int AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int,
  manager_id int,
  PRIMARY KEY(id)
);

CREATE TABLE department (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role (
  id int AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary decimal(10),
  department_id int, 
  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jerry", "Seinfeld", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Elain", "Seinfeld", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Goerge", "Partridge", 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Kramer", "Dufus", 4, 4);

INSERT INTO department (name) VALUES ("accounting");
INSERT INTO department (name) VALUES ("engineering");
INSERT INTO department (name) VALUES ("hr");
INSERT INTO department (name) VALUES ("social");

INSERT INTO role (title, salary, department_id) VALUES ("tax accountant", 25, 1);
INSERT INTO role (title, salary, department_id) VALUES ("physics engineer", 28.25, 2);
INSERT INTO role (title, salary, department_id) VALUES ("hiring manager", 22, 3);
INSERT INTO role (title, salary, department_id) VALUES ("public relations specialist", 19, 4);

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM role;
