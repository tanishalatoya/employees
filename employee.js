class Employee {
  constructor(name) {
    this.name = name;
    this.personality = 'helpful';
    this.monthsOfEmployment = 0;
    this.onboarding = true;
    if (this.name[5]) {
      this.onCall = false;
    } else {
      this.onCall = true;
    }
  }

  work() {
    if(this.monthsOfEmployment >= .5) {
      this.onboarding = false;
    }
    this.monthsOfEmployment +=4;
  }
}

module.exports = Employee;
