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

module.exports = Park;
