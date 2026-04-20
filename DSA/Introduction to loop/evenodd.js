// start = 1;
// end = 5;
// if (start > end) {
//   let m = start;
//   start = end;
//   end = m;
//   console.log(start);
//   console.log(end);
// }

// let evenSum = 0;
// let oddSum = 0;
// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     evenSum = evenSum + i;
//   } else {
//     oddSum = oddSum + i;
//   }
// }
// console.log( [evenSum, oddSum]);

let count = 0;
for (let i = 2; i <= 20; i += 3) {
    count++;
}
console.log(count);

