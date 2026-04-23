let prompt = require("prompt-sync")();
let num = Number(prompt("Enter Digit :- "));
let sum = 0;
while(num > 0){
    let digit = num % 10;
    // console.log(Math.floor(digit));
    // process.stdout.write(digit + " ");
    sum += digit
    num = Math.floor(num / 10);
}
console.log(sum);


//  --------------------------- 

let prompt = require('prompt-sync')();
let num = Number(prompt("Enter the number to check Automorphic:- "));
let temp = num;
let square = num * num;
let isAuto = true;
while(temp > 0){
    if(temp % 10 !== square % 10){
        isAuto = false;
        break;
    }
    
    temp = Math.floor(temp / 10);
    square = Math.floor(num / 10);
}
if(isAuto){
    console.log("It is Automorphic");
} else {
    console.log("It is not Automorphic");
}



// ---------------------------------------------------

// ISBN :- International Structured Nook Number

// let num = 9992158106;
let num = 8175257660;
let temp = num;
let count = 0;
while (temp > 0) {
    let digit = temp % 10;
    count++;
    temp = Math.floor(temp / 10);
}
// console.log(count);
let ans = 0; 
let place = 10;
if (count == 10) {
    while (temp > 0) {
        let digit = temp % 10;
        ans = ans + (digit * place);
        place--;
        num = Math.floor(num / 10);
    }
    if (ans % 11 == 0) {
        console.log("It is ISBN Number");

    } else {
        console.log("It is not ISBN");

    }


} else {
    console.log("It is not ISBN number");
}
