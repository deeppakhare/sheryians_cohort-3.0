// let nStr = 12;
// let sum = 0;
// for (let i = 1; i < nStr; i++) {
//   if (nStr % i == 0) {
//     sum += i;
//   }
// }
// if (sum > nStr) console.log("Yes");
// else console.log("No");





























let num = 55;
let sum = 0;
for(let i = 1; i <= num/2; i++){
  if(num % i == 0) sum += i;
  
}
console.log(sum);

if(sum > num) console.log("it is abundant");
else console.log("It is not abundant");

