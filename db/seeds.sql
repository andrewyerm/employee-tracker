INSERT INTO department (name) VALUES ('Engineering'), ('Sales'), ('Finance');

INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 80000, 1),
('Sales Manager', 60000, 2),
('Accountant', 55000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL),
('Andrew', 'Yermakovich', 2, 1),
('Tim', 'Cook', 3, 2);
