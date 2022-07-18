//Importing neccessary files
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

//Function to write html files

//Function to initialize app (or async func)

//Call function

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
    },
    {
      type: 'input',
      message: 'What is the team manager\'s office number?',
      name: 'managerOffice',
      filter(answer) {
        return parseInt(answer);
      }
    },
    {
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'anotherMember.first',
      choices: ['Manager', 'Engineer', 'Intern']
    },
    // {
    //   type: 'input',
    //   message: 'What is the engineer\'s name?',
    //   name: 'engineerName',
    //   when(answers) {
    //     return answers.anotherMember.first === 'Engineer';
    //   }
    // },
    // {
    //   type: 'input',
    //   message: 'What is the engineer\'s ID?',
    //   name: 'engineerId',
    //   filter(answer) {
    //     return parseInt(answer);
    //   }
    // },
    // {
    //   type: 'input',
    //   message: 'What is the engineer\'s email address?',
    //   name: 'engineerEmail',
    // },
    // {
    //   type: 'input',
    //   message: 'What is the engineer\'s GitHub username?',
    //   name: 'engineerGit',
    // },
    // {
    //   type: 'list',
    //   message: 'Would you like to add another team member?',
    //   choices: ['Engineer', 'Intern'],
    //   name: 'anotherMember.second',
    // },
    // {
    //   type: 'input',
    //   message: 'What is the intern\'s name?',
    //   name: 'internName',
    //   when(answers) {
    //     return answers.anotherMember.second === 'Intern';
    //   }
    // },
    // {
    //   type: 'input',
    //   message: 'What is the intern\'s ID?',
    //   name: 'internId',
    //   filter(answer) {
    //     return parseInt(answer);
    //   }
    // },
    // {
    //   type: 'input',
    //   message: 'What is the intern\'s email address?',
    //   name: 'internEmail',
    // },
    // {
    //   type: 'input',
    //   message: 'What is the intern\'s school?',
    //   name: 'internSchool',
    // }
  ])
    .then((answers) => {
      //function here to generate manager card in html
      //fs.writeFile('index.html', empl)
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
    },
    {
      type: 'input',
      message: 'What is the engineer\'s GitHub username?',
      name: 'engineerGit',
    },
    {
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'anotherMember.first',
      choices: ['Manager', 'Engineer', 'Intern']
    },
  ])
    .then((answers) => {
      //function here to generate manager card in html
      //fs.writeFile('index.html', empl)
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
      when(answers) {
        return answers.anotherMember.second === 'Intern';
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
    },
    {
      type: 'input',
      message: 'What is the intern\'s school?',
      name: 'internSchool',
    },
    {
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'anotherMember.first',
      choices: ['Manager', 'Engineer', 'Intern']
    },
  ])
    .then((answers) => {
      //function here to generate manager card in html
      //fs.writeFile('index.html', empl)
    })
    .catch((err) => {
      if (err) throw err;
    })
}

async function askEmployee() {
  const answers = await askManager();
  console.log('ok');
  const engineerAnswers = await askEngineer(answers);
  console.log('ok2');
  const internAnswers = await askIntern(engineerAnswers);

}

askEmployee()
