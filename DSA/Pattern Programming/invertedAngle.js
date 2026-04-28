let prompt = require('prompt-sync')();
let num = Number(prompt("Enter number:- "));

for(let i = 1; i <= num; i++){
    for(let j = 1; j <= num - i + 1; j++){
        process.stdout.write("* ")
    }
    console.log();
    
}