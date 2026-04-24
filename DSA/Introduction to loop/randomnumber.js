let prompt = require("prompt-sync")();
let random = Math.floor(Math.random() * 10 + 1);
// console.log(random);

let num;
do {
  let num = prompt("Guess the number:- ");
  if (num > random) console.log("TO large number");
  else if (num < random) console.log("To small");
  else if (num == random) {
    console.log("You are correct");
    break;
  } else {
    console.log("Invalid number");
  }
} while (random != num);
