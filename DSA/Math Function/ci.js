let prompt = require("prompt-sync")();

let P = prompt("Enter Principal:- ");
let r = prompt("Enter rate of intrest:- ");
let t = prompt("Enter time:-  ");

let CP = P * Math.pow((1 + r/100),(t)) - P;

console.log(CP.toFixed(2));
