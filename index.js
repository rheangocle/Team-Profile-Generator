//Importing neccessary files
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const htmlGenerator = require('./htmlGenerator');

let teamArr = [];
//Function to write html files

//Function to initialize app (or async func)
/*function init() {
add func for creating mangager
  function createManager() {
    use inquirer 
  }

  .then(answers) => {
    -send answers
    -push new manager to team array
    -call function for determining type of employee, createTeam()
  }
}

function for determining type of employee:
function createTeam() {
  use inquirer
  then, based on choice, run func associated with adding employee type
  .then((choice)) => {
    conditional that runs function for employee type that user selected
    if intern, run addIntern func
    if they do not want anymore members, run function to build team(create file)
  }
}

function for adding team member: separate func for each type
function addIntern() {
  use inquirer
  prompt qs
  take answers and create instance of Intern, add to new Intern 
  push member into team array
}

function for building team
function buildTeam() {
  create file and add team to it
  call function, passing in team members array, send to another js file
}

last of initializing function is to call function for creating manager so that it is the first question being asked. 

createManager()

*/

let askManager = () => {

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
          return console.log('Please enter your name.');
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
          return "You have to provide a valid email address!"
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
    // {
    //   type: 'list',
    //   message: 'Would you like to add another team member?',
    //   name: 'anotherMember.first',
    //   choices: ['Manager', 'Engineer', 'Intern']
    // },
  ])
    .then((answer) => {
      const manager = new Manager(
        answer.managerName,
        answer.managerId,
        answer.managerEmail,
        answer.officeNumber,
      );
      teamArr.push(manager);
      fs.writeFile('index.html', htmlGenerator(manager), err => {
        if (err) throw err;
      })
      //console.log(teamArr);

    })
    .catch((err) => {
      if (err) throw err;
    })
}

let askEmployeeType = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'anotherMember',
        choices: ['Manager', 'Engineer', 'Intern', 'None']
      },
    ])
    .then((answer) => {
      if (answer.anotherMember === "Engineer") {
        askEngineer();
      } else if (answer.anotherMember === "Intern") {
        askIntern();
      } else if (answer.anotherMember === "Manager") {
        askManager();
      } else {
        console.log(teamArr);
        process.exit(0);
      }
    })
    .catch((err) => {
      if (err) throw err;
    })
}

let askEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the engineer\'s name?',
      name: 'engineerName',
      validate: function (input) {
        if (input.length == 0) {
          return console.log('Please enter your name.');
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
          return "You have to provide a valid email address!"
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
          return console.log('Please enter your name.');
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
      //console.log(teamArr);
      htmlGenerator(engineer);
      askEmployeeType();
    })
    .catch((err) => {
      if (err) throw err;
    })
}

let askIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the intern\'s name?',
      name: 'internName',
      validate: function (input) {
        if (input.length == 0) {
          return console.log('Please enter your name.');
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
          return "You have to provide a valid email address!"
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
          return console.log('Please enter your name.');
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
      htmlGenerator(intern);
      askEmployeeType();
    })
    .catch((err) => {
      if (err) throw err;
    })
}

//async funcs
async function askEmployee() {
  // const managerAnswers = await askManager();
  // await askEmployeeType(managerAnswers);
  await askManager();
  await askEmployeeType();
}

//init function
askEmployee();