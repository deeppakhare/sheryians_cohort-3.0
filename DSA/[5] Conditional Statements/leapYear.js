// leap year from user input
let prompt = require("prompt-sync")();
let year = prompt("Enter year:- ");

if((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`It is not leap year`);
}