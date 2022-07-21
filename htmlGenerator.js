//role = manager.getRole();
function htmlGenerator(profile) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profiles</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  <link rel="stylesheet" src="./style.css">
</head>

<body>
  <nav class="navbar bg-warning">
    <div class="container-fluid justify-content-center align-content-center">
      <span class="navbar-brand py-3 my-1 h1 fs-1">My Team</span>
    </div>
  </nav>

  <div class="pt-5 mt-5 row justify-content-evenly">

    ${profile}
    
  </div>
  </body>
  
  </html>`
}

// function appendHtml(employee) {
//   return `<div class="card shadow" style="width: 18rem;">
//   <div class="card-header bg-primary">
//     <h2 class="card-title">${employee.name}</h2>
//     <h3 class="card-subtitle text-muted">Position</h3>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item p-3">ID: ${employee.id}</li>
//     <li class="list-group-item p-3">Email: ${employee.email}</li>
//     <li class="list-group-item p-3">GitHub: ${employee.github}</li>
//   </ul >
// </div > `
// }

//const Engineer = require("./lib/Engineer");

function generateHtml(data) {

  let myTeamArr = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    let employeeRole = employee.getRole();

    if (employeeRole === "Manager") {
      let managerProfile = `<div class="card shadow" style="width: 18rem;">
      <div class="card-header bg-primary">
        <h2 class="card-title">${employee.name}</h2>
        <h3 class="card-subtitle text-muted">${employee.role}</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item p-3">ID: ${employee.id}</li>
        <li class="list-group-item p-3">Email: ${employee.email}</li>
        <li class="list-group-item p-3">Office Number: ${employee.officeNumber}</li>
      </ul>
    </div>`
      myTeamArr.push(managerProfile);
    }

    if (employeeRole === "Engineer") {
      const engineerProfile = `<div class="card shadow" style="width: 18rem;">
      <div class="card-header bg-primary">
        <h2 class="card-title">${employee.name}</h2>
        <h3 class="card-subtitle text-muted">${employee.role}</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item p-3">ID: ${employee.id}</li>
        <li class="list-group-item p-3">Email: ${employee.email}</li>
        <li class="list-group-item p-3">GitHub: ${employee.github}</li>
      </ul>
    </div>`

      myTeamArr.push(engineerProfile);
    }

    if (employeeRole === "Intern") {
      const internProfile = `<div class="card shadow" style="width: 18rem;">
      <div class="card-header bg-primary">
        <h2 class="card-title">${employee.name}</h2>
        <h3 class="card-subtitle text-muted">${employee.role}</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item p-3">ID: ${employee.id}</li>
        <li class="list-group-item p-3">Email: ${employee.email}</li>
        <li class="list-group-item p-3">School: ${employee.school}</li>
      </ul>
    </div>`;

      myTeamArr.push(internProfile);
    }
  }

  let allCards = myTeamArr.join('');
  //console.log(allCards);
  //const generatePage = htmlGenerator(allCards);
  return htmlGenerator(allCards);
}

module.exports = generateHtml;
