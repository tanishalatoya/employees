var assert = require('chai').assert;
var Employee = require('./emplyee');

describe('Employee', function() {

  it.skip('should have a name', function() {
    var marissa = new Employee("Marissa");
    var octavio = new Employee("Octavio");

    assert.equal(marissa.name, "Marissa");
    assert.equal(octavio.name, "Octavio");
  });

  it.skip('should be helpful', function() {
    var marissa = new Employee("Marissa");

    assert.equal(marissa.personality, "helpful");
  });

  it.skip('should start as a new employee', function() {
    var marissa = new Employee("Marissa");

    assert.equal(marissa.monthsOfEmployment, 0);
  });

  it.skip('should keep track of time employed', function() {
    var marissa = new Employee("Marissa");

    marissa.work();
    marissa.work();
    marissa.work();
    assert.equal(marissa.monthsOfEmployment, 12);
  });

  it.skip('should be onboarding until the 6 month workiversary', function() {
    var marissa = new Employee("Marissa");

    marissa.work();
    assert.equal(marissa.onboarding, true);
    marissa.work();
    assert.equal(marissa.onboarding, false);
  });

  it.skip('should be on call if their name is less than 6 characters long', function() {
    var sally = new Employee("Sally");
    var marissa = new Employee("Marissa");
    var octavio = new Employee("Octavio");

    assert.equal(sall.onCall, true);
    assert.equal(marissa.onCall, false);
    assert.equal(octavio.onCall, false);
  });

});
