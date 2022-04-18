//Week 6 Homework
function reverse(string) {
    var reversedWord = "";
    for (i = string.length - 1; i >= 0; i--) {
        reversedWord += string[i];
    }
    
    return reversedWord;
}

console.log(reverse("hey"));
console.log(reverse("sophisticated"));
console.log(reverse("eloquent"));

// Q2

function numVowels(string) {
    amountVowels = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] ===  "e" ||string[i] ===  "i" || string[i] === "o" || string[i] === "u") {
            amountVowels ++ ;
        }
    }
    return amountVowels;
}
console.log(numVowels("adieu"));
console.log(numVowels("no"));
console.log(numVowels("fantastic"));

// Q3

function numStringsShorterThanLength(strings, length) {
    var amountStringsShorterThanLength =  0
    for (i = 0; i < strings.length; i++) {
        if (strings[i].length < length) {
            amountStringsShorterThanLength++;
        }
    }
    return amountStringsShorterThanLength;
}
console.log(numStringsShorterThanLength(["cat", "dog", "dinosaur"], 5)); 
console.log(numStringsShorterThanLength(["hamster", "rat", "butterfly"], 6)); 
console.log(numStringsShorterThanLength(["platypus", "iguana", "rhino"], 3)); 

