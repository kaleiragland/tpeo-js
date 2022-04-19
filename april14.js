// Week 7 Homework

var model = Array(10).fill("honda"); // makes an array with 10 'honda's
var color = Array(10).fill("white");
var mpg = Array(10).fill(30.0);

num = 1;
var carArray = [];
for (var i = 0; i < model.length; i++) {
    carArray[i] = [];
    for (var j = 0; j < model.length; j++) {
        carArray[i][j] = {
                model: model[i],
                color: color[i],
                mpg: mpg[i],
                id: num }
        num += 1;    // makes id number go up by 1 with each iteration
    }
}
//console.log(carArray);

// Q2
function getCarsBetweenIds(idMin, idMax) {
    newArray = [];
    for (var i = 0; i < carArray.length; i++) {
        for (var j = 0; j < carArray.length; j++) {
            if (carArray[i][j].id <= idMax && carArray[i][j].id >= idMin) {
                carArray[i][j].color = 'blue'; //changes color property to blue
                newArray.push(carArray[i][j]); 
    

            }
        }
    }
    console.log(newArray);
}

console.log(getCarsBetweenIds(1,10));
console.log(getCarsBetweenIds(1,2));
console.log(getCarsBetweenIds(5,7));


