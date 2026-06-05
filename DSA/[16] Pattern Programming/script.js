// ************* Rigth Angle Trangle **********

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j+ " ");
//   }
//   console.log("   ");
// }

// ************* Inverted Rigth Angle Trangle **********

// let prompt = require('prompt-sync')();
// let num = Number(prompt("Enter number"));

// for(let i = 1; i<= num; i++){
//     for(let j = num; j >= i;j-- ){
//         process.stdout.write("* ");
//     }
//     console.log(" ");

// }

// ************* Mirrored Rigth Angle Trangle **********

// let prompt = require("prompt-sync")();
// let num = prompt("Enter number: ");

// for (let i = 1; i <= num; i++) {
//   for (let k = i; k <= num - 1; k++) {
//     process.stdout.write("  ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }

//   console.log();
// }

// ************* V Shaped Pattern **********

let prompt = require("prompt-sync")();
let num = Number(prompt("Enter number for v shape"));

// for(let i = 1; i <= num; i++){
//     for(let j = 1; j <= num; j++){
//         if(i==j){
//             process.stdout.write("* ");
//         } else {
//             process.stdout.write("  ");
//         }

//     }

//     for(k = 1; k <= num; k++){
//         if(i+k == 6){
//             process.stdout.write("* ");
//         } else {
//             process.stdout.write("  ");
//         }

//     }
//     console.log();
// }

// ************* X Shaped Pattern **********

//  input taken from previous code

// for(let i = 1; i <= num; i++){
//     for(let j = 1; j <= num; j++){
//         if(i == j || i + j == num+1) process.stdout.write("* ");
//         else process.stdout.write("  ");
//     }
//     console.log();
// }

// ************* Hollow Square **********

// for (let i = 1; i <= num; i++) {
//   for (j = 1; j <= num; j++) {
//     if (i == 1 || i == num || j == 1 || j == num) process.stdout.write("* ");
//     else process.stdout.write("  ");
//   }
//   console.log();
// }


//  ***************** Trangle pattern **************

for(let i = 1; i <= num; i++){
    for(j = 1; j <= num; j++){
        if(i + j == num + 1 || i == num) process.stdout.write("* ");
        else process.stdout.write("  ");
    } 
    for(j = 1; j <= num; j++){
        if(i == j || i == num) process.stdout.write("* ");
        else process.stdout.write("  ");
    } 
    console.log();
    
}