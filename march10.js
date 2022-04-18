// Week 3 Homework
function countUpwardsByThree() {
    for (num = 0; num <= 30; num+=3) {
        console.log(num);
    }
}

countUpwardsByThree();

function guessMyFavoriteNumber(guess) {
    if (guess == 7) {
        console.log("You guessed my favorite number!");
    } else {
        console.log("Try Again!");
    }
}
guessMyFavoriteNumber(3);
guessMyFavoriteNumber(7);
guessMyFavoriteNumber(-1);

function convertNumberToDay(number) {
    switch (number) {
        case 0: 
            console.log("Sunday");
            break;
        case 1: 
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Not a day");

    }
}
for (i = 0; i <= 7; i++) {
    convertNumberToDay(i);
}
    