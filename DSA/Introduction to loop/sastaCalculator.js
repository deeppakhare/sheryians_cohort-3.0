let prompt = require("prompt-sync")();
let num;
do {
  console.log("Enter 1 for addition:- ");
  console.log("Enter 2 for substraction:- ");
  console.log("Enter 3 for multiplication:- ");
  console.log("Enter 4 for Division:- ");
  num = Number(prompt("Enter the Number:- "));
  switch (num) {
    case 1:
      let a = Number(prompt("Enter first nnumber:- "));
      let b = Number(prompt("Enter second number:- "));
      console.log("Addition is " + (a + b));
      break;
    case 2:
      a = Number(prompt("Enter first nnumber:- "));
      b = Number(prompt("Enter second number:- "));
      console.log("Substraction is " + (a - b));
      break;
    case 3:
      a = Number(prompt("Enter first nnumber:- "));
      b = Number(prompt("Enter second number:- "));
      console.log("Multiplication is " + a * b);
      break;
    case 4:
      a = Number(prompt("Enter first nnumber:- "));
      b = Number(prompt("Enter second number:- "));
      console.log("Division is " + Math.floor(a / b));
      break;

    default:
      console.log("Invalid Number");
      break;
  }
  num = Number(prompt("Enter 10 for restart:- "));
} while (num == 10);
