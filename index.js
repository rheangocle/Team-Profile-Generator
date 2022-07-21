//Importing neccessary files
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const generateHtml = require('./htmlGenerator');

//Declare empty team array
let teamArr = [];



const askManager = () => {

  return inquirer.prompt([
    // {
    //   type: 'list',
    //   message: 'Choose a role for the employee: ',
    //   name: 'anotherMember.first',
    //   choices: ['Manager', 'Engineer', 'Intern']
    // },
    {
      type: 'input',
      message: 'What is the name of the team manager?',
      name: 'managerName',
      validate: function (input) {
        if (input.length == 0) {
          return console.log('Please enter a name.');
        } else { return true };
      },
      //Returns name with first letter of each word capitalized
      filter: function (input) {
        return input.split(" ").map(word => {
          return word.substring(0, 1).toUpperCase() + word.substring(1);
        }).join(" ");
      }
    },
    {
      type: 'input',
      message: 'What is the team manager\'s ID?',
      name: 'managerId',
      filter(answer) {
        return parseInt(answer);
      }
    },
    {
      type: 'input',
      message: 'What is the team manager\'s email address?',
      name: 'managerEmail',
      validate: (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(input)) {
          return "You have to provide a valid email address."
        }
        return true
      }
    },
    {
      type: 'input',
      message: 'What is the team manager\'s office number?',
      name: 'officeNumber',
      filter(answer) {
        return parseInt(answer);
      }
    },
  ])
    .then((answer) => {
      const manager = new Manager(
        answer.managerName,
        answer.managerId,
        answer.managerEmail,
        answer.officeNumber,
      );
      teamArr.push(manager);
    })
    .catch((err) => {
      if (err) throw err;
    })
}

let askEmployeeType = (teamArr) => {
  return inquirer
    .prompt([
      {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'anotherMember',
        choices: ['Manager', 'Engineer', 'Intern', 'None'],
      },
    ])
    .then((answer) => {
      if (answer.anotherMember === "Engineer") {
        askEngineer();
      } else if (answer.anotherMember === "Intern") {
        askIntern();
      } else if (answer.anotherMember === "Manager") {
        console.log('There is already a manager for this team. Please select another team member');
        askEmployeeType();
      } else {
        console.log(teamArr);
        // createTeam(teamArr);
        //process.exit(0);
        //return teamArr;
        //return generateHtml(teamArr);
      }
      //return generateHtml(teamArr);
    })
    .catch((err) => {
      if (err) throw err;
    })
}

const askEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the engineer\'s name?',
      name: 'engineerName',
      validate: function (input) {
        if (input.length == 0) {
          return console.log('Please enter a name.');
        } else { return true };
      },
      filter: function (input) {
        return input.split(" ").map(word => {
          return word.substring(0, 1).toUpperCase() + word.substring(1);
        }).join(" ");
      }
    },
    {
      type: 'input',
      message: 'What is the engineer\'s ID?',
      name: 'engineerId',
      filter(answer) {
        return parseInt(answer);
      }
    },
    {
      type: 'input',
      message: 'What is the engineer\'s email address?',
      name: 'engineerEmail',
      validate: (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(input)) {
          return "You have to provide a valid email address."
        }
        return true
      }
    },
    {
      type: 'input',
      message: 'What is the engineer\'s GitHub username?',
      name: 'engineerGit',
      validate: function (input) {
        if (input.length == 0) {
          return console.log('Please enter a github username.');
        } else { return true };
      }
    },
  ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.engineerName,
        answer.engineerId,
        answer.engineerEmail,
        answer.engineerGit,
      );
      teamArr.push(engineer);
      //generateHtml(teamArr);
      //askEmployeeType();
      askEmployeeType();
      //return generateHtml(teamArr)
    })
    .catch((err) => {
      if (err) throw err;
    })
}

const askIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the intern\'s name?',
      name: 'internName',
      validate: function (input) {
        if (input.length == 0) {
          return console.log('Please enter a name.');
        } else { return true };
      },
      filter: function (input) {
        return input.split(" ").map(word => {
          return word.substring(0, 1).toUpperCase() + word.substring(1);
        }).join(" ");
      }
    },
    {
      type: 'input',
      message: 'What is the intern\'s ID?',
      name: 'internId',
      filter(answer) {
        return parseInt(answer);
      }
    },
    {
      type: 'input',
      message: 'What is the intern\'s email address?',
      name: 'internEmail',
      validate: (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(input)) {
          return "You have to provide a valid email address."
        }
        return true
      }
    },
    {
      type: 'input',
      message: 'What is the intern\'s school?',
      name: 'internSchool',
      validate: function (input) {
        if (input.length == 0) {
          return console.log('Please enter a school name.');
        } else { return true };
      }
    },
  ])
    .then((answer) => {
      const intern = new Intern(
        answer.internName,
        answer.internId,
        answer.internEmail,
        answer.internSchool,
      );
      teamArr.push(intern);
      //console.log(teamArr);
      askEmployeeType();
    })
    .catch((err) => {
      if (err) throw err;
    })
}

function writeFile(data) {
  fs.writeFile('./index.html', data, err => {
    if (err) throw err;
    console.log('Your Team Profile page has been created!');
  })
}

//init function
askManager()
  .then(askEmployeeType)
  .then((data) => { return teamArr })
  .then(teamArr => {
    return generateHtml(teamArr);
  })
  .then(writeFile)
  .catch((err) => {
    if (err) throw err;
  })
