// Week 4 Homework
function powersOfThree() {
    for (i = 1; i <= 3**9; i*=3) {
        console.log(i);
        if (i == 9) {
            console.log("This is my favorite power of three!");
        }
    }
}

var timeoutId = setTimeout(powersOfThree, 3000); //delays function call for 3 seconds

// Q2
function everyTenSeconds() {
    console.log("Hello World!"); 
}

function clearDateInterval(intervalId) { //stop everyTenSeconds from being called
    clearInterval(intervalId);
}
var intervalId = setInterval(everyTenSeconds, 10000); //prints "Hello World" every 10 seconds
setTimeout(clearDateInterval, 120000, intervalId); //delays clearDateInterval for 2 minutes and stops everyTenSeconds
