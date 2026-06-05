let prompt = require("prompt-sync")();
let n = prompt("Enter the Number:- ");
if (n <= 1) {
  console.log("Not Prime");
} else {
  let count = 0;
  for (let i = 2; i < n ; i++) {
    if (n % i == 0) {
      count++;
    }
  }
//   console.log(count);
  
  if (count == 0) {
    console.log("Is prime");
  } else {
    console.log("Not prime");
  }
}
