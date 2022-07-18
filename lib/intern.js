const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, schoolb) {

  }
  getSchool() {
    return this.school;
  };
  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;