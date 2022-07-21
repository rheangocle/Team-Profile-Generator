//Importing neccessary files
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const generateHtml = require('./htmlGenerator');
//const { start } = require('repl');

//Declare empty team array
let teamArr = [];

const askManager = () => {
  //Questions about the manager
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Would you like to create a team profile?',
      name: 'start',
      choices: ['Yes!', 'No, thanks'],
    },
    {
      type: 'input',
      message: 'What is the name of the team manager?',
      name: 'managerName',
      when: function (answers) {
        if (answers.start === 'Yes!') {
          return true
        } else {
          console.log('Come back when you do!');
          process.exit(0);
        }
      },
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
      },
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
    //Creating new instance of manager
    .then((answer) => {
      const manager = new Manager(
        answer.managerName,
        answer.managerId,
        answer.managerEmail,
        answer.officeNumber,
      );
      //adding manager to team array
      teamArr.push(manager);
    })
    .catch((err) => {
      if (err) throw err;
    })
}

const askEngineer = () => {
  //Asking questions regarding the intern
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the engineer\'s name?',
      name: 'engineerName',
      validate: function (input) {
        if (input.length == 0) {
          return console.log('Please enter a name.');
        } else { return true };
      },
      //Capitalizing name
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
      //Create instance of Engineer
      const engineer = new Engineer(
        answer.engineerName,
        answer.engineerId,
        answer.engineerEmail,
        answer.engineerGit,
      );
      //Adding engineer to team array
      teamArr.push(engineer);
      //Ask user to add another team member
      askEmployeeType();
    })
    .catch((err) => {
      if (err) throw err;
    })
}

const askIntern = () => {
  //Asking questions regarding the intern
  inquirer.prompt([
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
      },
      filter(answer) {
        return answer.toUpperCase();
      }
    },
  ])
    .then((answer) => {
      //Create instance of Intern
      const intern = new Intern(
        answer.internName,
        answer.internId,
        answer.internEmail,
        answer.internSchool,
      );
      //Add intern obj to the team array
      teamArr.push(intern);
      //Ask the user for another if they want to add another employee
      askEmployeeType();
    })
    .catch((err) => {
      if (err) throw err;
    })
}

const askEmployeeType = () => {
  //Ask user to add a team member
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'anotherMember',
        choices: ['Engineer', 'Intern', 'None'],
      },
    ])
    //Prompt user to answer questions depending on type of employee they choose
    .then((answer) => {
      if (answer.anotherMember === "Engineer") {
        askEngineer();
      } else if (answer.anotherMember === "Intern") {
        askIntern();
      } else {
        //passing the team array to create the html body
        const html = generateHtml(teamArr);
        //creating the html file
        writeFile(html);
      }
    })
    .catch((err) => {
      if (err) throw err;
    })
}


//Creating index file
function writeFile(data) {
  fs.writeFile("index.html", data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("Your team profile has been succesfully generated! Click on index.html to view.");
    }
  })
}

//init function
askManager()
  .then(askEmployeeType)
  .catch((err) => {
    if (err) throw err;
  })
