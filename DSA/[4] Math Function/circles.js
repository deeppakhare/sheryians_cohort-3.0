// 2*pi*r
let prompt = require("prompt-sync")();

let pi = 3.14
let r = Number(prompt("Enter radius: "))

let area = 2 * pi * r;

console.log(area.toFixed(2));