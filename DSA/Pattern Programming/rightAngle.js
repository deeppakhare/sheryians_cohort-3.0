// let prompt = require('prompt-sync')();
// let num = Number(prompt("ENter number :- "));

// for(let i = 1; i <= num; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// let prompt = require('prompt-sync')();
// let num = Number(prompt("ENter number :- "));

// for(let i = 1; i <= num; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(j + " ")
//     }
//     console.log();

// }

let prompt = require("prompt-sync")();

let num = Number(prompt("ENter number between 65 to 90:- "));

if (num < 65 && num > 90) {
  console.log("invalid number");
} else {
  for (let i = 65; i <= num; i++) {
    for (let j = 65; j <= i; j++) {
      process.stdout.write(String.fromCharCode(j) + " ");
    }
    console.log();
  }
}
