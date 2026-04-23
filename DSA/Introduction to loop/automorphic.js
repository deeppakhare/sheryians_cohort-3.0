

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