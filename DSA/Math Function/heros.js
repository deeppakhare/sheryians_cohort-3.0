let prompt = require("prompt-sync")();

let a = Number(prompt("Enter first side: "));
let b = Number(prompt("Enter second side: "));
let c = Number(prompt("Enter third side: "));

// let first find semi-perimeter
let s = (a + b + c) / 2;

// Let find Area
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(area);
