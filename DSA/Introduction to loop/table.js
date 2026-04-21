let prompt = require("prompt-sync")();
let n = Number(prompt("Enter number for print table :- "));

for(let i = 1; i <= 10; i++){
    console.log(`${n} * ${i} = ${n * i}`);
}