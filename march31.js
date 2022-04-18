function GroceryItem(name, price, inventory) {
    this.name = name;
    this.price = price;
    this.inventory = inventory;
}

var apple = new GroceryItem("apple", 0.50, 90);

console.log(apple)

var TPEO = {
    classes: ["Full Stack", "UI/UX", "Javascript"],
}

function Student(firstName, lastName, university, major, graduationYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.university = university;
    this.major = major;
    this.graduationYear = graduationYear;
    this.hasGraduated = graduationYear <= 2021;
}

var kalei = new Student("Kalei", "Ragland", "UT Austin", "Biochemistry", 2023);
var derek = new Student("Derek", "Wu", "UT Austin", "MIS", 2022);

console.log(kalei.major);
console.log(derek["major"]);
console.log(kalei.hasGraduated);

function Course(student, name, location) {
    this.student = student;
    this.name = name;
    this.location = location;

}

var introToJavascript = new Course(kalei, "Intro to Javascript", "GDC 6.302");
console.log(introToJavascript.student.graduationYear);
