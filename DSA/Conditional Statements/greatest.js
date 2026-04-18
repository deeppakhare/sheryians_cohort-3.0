let prompt = require("prompt-sync")();
let a = Number(prompt("Enter 1st number:- "));
let b = Number(prompt("Enter 2nd number:- "));
if (a > b) {
    console.log(`${a} is greatest number`);
} else {
 console.log(`${b} is greatest number`);   
}

