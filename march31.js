// Week 5 Homework
function Car(model, year, color, mpg) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}
var honda = new Car("Civic", 2005, "silver", 25);
var ford = new Car("Mustang", 2020, "red", 28);
var nissan = new Car("Accord", 2010, "white", 30);

console.log(honda.mpg);
console.log(ford.mpg);
console.log(nissan.mpg);
// Q2
function Vehicle(car) {
    this.car = car;
}

var hondaVehicle = new Vehicle(honda);
var fordVehicle = new Vehicle(ford);
var nissanVehicle = new Vehicle(nissan);

console.log(hondaVehicle.car.mpg);
console.log(fordVehicle.car.mpg);
console.log(nissanVehicle.car.mpg);