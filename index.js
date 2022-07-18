//Importing neccessary files
const inquirer = require('inquirer');
const fs = require('fs');

//Inquirer prompt questions
/*WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/

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
      choices: ['Engineer', 'Intern']
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
    //{
    //   type: 'list',
    //   message: 'Would you like to add another team member?',
    //   choices: ['Engineer', 'Intern'],
    //   name: 'anotherMember.second',
    // },
  ])
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
    }
  ])
}

async function askEmployee() {
  const answers = await askManager();
  console.log('ok');
  const engineerAnswers = await askEngineer(answers);
  console.log('ok2');
  const internAnswers = await askIntern(engineerAnswers)
}

askEmployee()
