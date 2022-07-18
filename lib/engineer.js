const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
    super(name, id, email);
  }
  getGithub() {

  };
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;