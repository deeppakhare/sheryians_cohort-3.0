let nStr = 12;
let sum = 0;
for (let i = 1; i < nStr; i++) {
  if (nStr % i == 0) {
    sum += i;
  }
}
if (sum > nStr) console.log("Yes");
else console.log("No");