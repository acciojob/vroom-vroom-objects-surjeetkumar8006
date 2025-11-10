// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method on Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to inherit make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor reference back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Method on SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
