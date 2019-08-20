const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    park = new Park("Jurassic Park", 100);
    dinosaur1 = new Dinosaur("pterodactyl", "carnivore", 60);
    dinosaur2 = new Dinosaur("stegosaurus", "herbivore", 40);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.removeDinosaur("pterodactyl");
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.mostVisitorsAttracted();
    assert.deepStrictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.allDinosOfSpecies("pterodactyl");
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to calculate total visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.vistitorsPerDay();
    assert.strictEqual(actual, 100);
  });

  it("should be able to calculate total visitors per year", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.vistitorsPerYear();
    assert.strictEqual(actual, 36500);
  });

  it('should be able to remove all dinosaurs of a particular species');

});
