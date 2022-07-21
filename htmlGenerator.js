//Creating the html body 
function htmlBody(profile) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profiles</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  <link rel="stylesheet" src="./assets/style.css">
</head>

<body>
  <nav class="navbar bg-warning">
    <div class="container-fluid justify-content-center align-content-center">
      <span class="navbar-brand py-3 my-1 h1 fs-1">My Team</span>
    </div>
  </nav>

  <div class="pt-5 mt-5 row justify-content-evenly">
  <!--Inserting member profile cards here-->
    ${profile}
    
  </div>
  </body>
  
  </html>`
}

//Creating the cards for employees
function generateHtml(data) {
  //declare emtry card array
  let myTeamCards = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    let employeeRole = employee.getRole();

    if (employeeRole === "Manager") {
      let managerProfile = `<div class="card shadow" style="width: 18rem;">
      <div class="card-header bg-primary">
        <h2 class="card-title">${employee.name}</h2>
        <h3 class="card-subtitle text-muted"><i class='fas fa-sitemap'></i> ${employee.getRole()}</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item p-3">ID: ${employee.id}</li>
        <li class="list-group-item p-3">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
        <li class="list-group-item p-3">Office Number: ${employee.officeNumber}</li>
      </ul>
    </div>`
      myTeamCards.push(managerProfile);
    }

    //Creating engineer card
    if (employeeRole === "Engineer") {
      const engineerProfile = `<div class="card shadow" style="width: 18rem;">
      <div class="card-header bg-primary">
        <h2 class="card-title">${employee.name}</h2>
        <h3 class="card-subtitle text-muted"><i class='fas fa-laptop-code'></i> ${employee.getRole()}</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item p-3">ID: ${employee.id}</li>
        <li class="list-group-item p-3">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
        <li class="list-group-item p-3">GitHub: <a href="http://github.com/${employee.github} target='_blank">${employee.github}</a></li>
      </ul>
    </div>`

      myTeamCards.push(engineerProfile);
    }

    //Creating intern card
    if (employeeRole === "Intern") {
      const internProfile = `<div class="card shadow" style="width: 18rem;">
      <div class="card-header bg-primary">
        <h2 class="card-title">${employee.name}</h2>
        <h3 class="card-subtitle text-muted"><i class='fas fa-graduation-cap'></i> ${employee.getRole()}</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item p-3">ID: ${employee.id}</li>
        <li class="list-group-item p-3">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
        <li class="list-group-item p-3">School: ${employee.school}</li>
      </ul>
    </div>`;

      myTeamCards.push(internProfile);
    }
  }

  const allCards = myTeamCards.join('');
  return htmlBody(allCards);
}

module.exports = generateHtml;
