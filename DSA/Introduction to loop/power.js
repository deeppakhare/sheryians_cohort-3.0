let prompt = require("prompt-sync")();
let a = prompt("Enter a:- ");
let b = prompt("Enter b:- ");

result = 1;
for(let i = 1;i <= b; i++){
    result = a * result;
}

console.log(result);
