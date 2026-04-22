let prompt = require("prompt-sync")();
let n = Number(prompt("Enter number for factors:- "));
for(let i = 1; i <= n; i++){
    if (n % i === 0) {
        process.stdout.write(i + " ");
    }
}