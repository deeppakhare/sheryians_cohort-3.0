let prompt = require("prompt-sync")();
let n = prompt("Enter the number:- ");

for(let i = n; i >= 1; i--){
    process.stdout.write(i + " ");
}