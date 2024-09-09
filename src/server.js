const inquirer = require('inquirer');
const { viewAllDepartments, viewAllRoles, viewAllEmployees } = require('./queries');

const mainMenu = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update an Employee Role',
        'Exit'
      ]
    }
  ]).then((answer) => {
    switch (answer.action) {
      case 'View All Departments':
        viewAllDepartments().then(() => mainMenu());
        break;
      case 'View All Roles':
        viewAllRoles().then(() => mainMenu());
        break;
      case 'View All Employees':
        viewAllEmployees().then(() => mainMenu());
        break;
      case 'Exit':
        process.exit();
      default:
        mainMenu();
    }
  });
};

mainMenu();
