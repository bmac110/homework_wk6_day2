const Park = function (name, price){
  this.name = name;
  this.price = price;
  this.dinosaurs = []
}

Park.prototype.numberOfDinosaurs = function(){
  return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(name){
  let foundDinosaur;

  for (let dinosaur of this.dinosaurs){
    if (dinosaur.name === name){
      foundDinosaur = dinosaur;
    }
  }
  let index = this.dinosaurs.indexOf(foundDinosaur)

  this.dinosaurs.splice(index, 1);
}

Park.prototype.mostVisitorsAttracted = function(){
  let popularDinosaur = this.dinosaurs[0];

  for (dinosaur of this.dinosaurs){
    if(dinosaur.guestsAttractedPerDay > popularDinosaur.guestsAttractedPerDay){
      popularDinosaur = dinosaur;
    }
  }
  return popularDinosaur;
};

Park.prototype.allDinosOfSpecies = function (species) {
  const foundDinos = [];
  for (let dinosaur of this.dinosaurs){
    if (dinosaur.species === species) {
      foundDinos.push(dinosaur)
    }
  }

  return foundDinos;
};

Park.prototype.removeAllDinosOfSpecies = function (species) {
  let foundDinos;

  for (let dinosaur of this.dinosaurs){
    if (dinosaur.species === species) {
      foundDinosaur = dinosaur
    }
  }

  let index = this.dinosaurs.indexOf(foundDinosaur);

  this.dinosaurs.splice(index, 1);
};


Park.prototype.visitorsPerDay = function(){
  total = 0
  for (let dinosaur of this.dinosaurs){
    (total += dinosaur.guestsAttractedPerDay);
  }
  return total
};

Park.prototype.visitorsPerYear = function(){
  total = 0
  for (let dinosaur of this.dinosaurs){
    (total += dinosaur.guestsAttractedPerDay * 365);
  }
  return total
};

Park.prototype.revenuePerYear = function(){
  return this.visitorsPerYear() * this.price;
};

module.exports = Park;
