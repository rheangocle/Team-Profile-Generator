//role = manager.getRole();
//id

const index = require("./index")

function generateHtml(array) {
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
    <div class="card shadow" style="width: 18rem;">
      <div class="card-header bg-primary">
        <h2 class="card-title">${array[0].name}</h2>
        <h3 class="card-subtitle text-muted">Position</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item p-3">ID: ${array[0].id}</li>
        <li class="list-group-item p-3">Email: ${array[0].email}</li>
        <li class="list-group-item p-3">Office Number: ${array[0].officeNumber}</li>
        <li class="list-group-item p-3">GitHub: </li>
      </ul>
    </div>

    <div class="card shadow" style="width: 18rem;">
      <div class="card-header bg-primary">
        <h2 class="card-title">Name</h2>
        <h3 class="card-subtitle text-muted">Position</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item p-3">ID: </li>
        <li class="list-group-item p-3">Email: </li>
        <li class="list-group-item p-3">Office Number:</li>
        <li class="list-group-item p-3">GitHub: </li>
      </ul>
    </div>

  </div>
</body>

</html>`
}


module.exports = generateHtml;