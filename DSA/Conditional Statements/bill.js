let prompt = require("prompt-sync")();
let bill = 0;
let unit = Number(prompt("Enter unit:- "));
if (unit <= 100) {
    bill = unit * 4.2;
} 
else if (unit <= 200) {
    bill = (100 * 4.2) + ((unit - 100) * 6);
} 
else if (unit <= 400) {
    bill = (100 * 4.2) + (100 * 6) + ((unit - 200) * 8);
} 
else if (unit > 400) {
    bill = (100 * 4.2) + (100 * 6) + (200 * 8) + ((unit - 400) * 13);
} 
else {
    console.log("Invalid Unit");
}

console.log(bill.toFixed(1));

