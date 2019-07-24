var assert = require('chai').assert;
var Employee = require('./emplyee');

describe('Employee', function() {

  it.skip('should have a name', function() {
    var fido = new Employee("Fido");
    var baxter = new Employee("Baxter");

    assert.equal(fido.name, "Fido");
    assert.equal(baxter.name, "Baxter");
  });

  it.skip('should be friendly', function() {
    var fido = new Employee("Fido");

    assert.equal(fido.personality, "friendly");
  });

  it.skip('should start as a newborn pup', function() {
    var fido = new Employee("Fido");

    assert.equal(fido.age, 0);
  });

  it.skip('should grow up, in human years', function() {
    var fido = new Employee("Fido");

    fido.growUp();
    fido.growUp();
    fido.growUp();
    assert.equal(fido.age, 21);
  });

  it.skip('should be considered a puppy when 7 human years or younger', function() {
    var fido = new Employee("Fido");

    assert.equal(fido.puppy, true);
    fido.growUp();
    assert.equal(fido.puppy, true);
    fido.growUp();
    assert.equal(fido.puppy, false);
  });

  it.skip('should be popular if name starts with the letter B', function() {
    var baxter = new Employee("Baxter");
    var bella = new Employee("Bella");
    var daisy = new Employee("Daisy");
    var fido = new Employee("Fido");

    assert.equal(baxter.popular, true);
    assert.equal(bella.popular, true);
    assert.equal(daisy.popular, false);
    assert.equal(fido.popular, false);
  });
});
