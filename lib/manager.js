const Employee = require('./Employee');

class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;

    super(name, id, email);
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;