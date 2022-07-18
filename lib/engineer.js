const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {

  }
  getGithub() {

  };
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;