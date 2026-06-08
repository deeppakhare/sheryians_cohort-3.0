let arr = [23, 14, 56, 17, 45, 9, 27];
// let arr = [3, 2, 2, 2, 2, 2, 2];

let second = Math.max(arr[1], arr[0]);
let first = Math.min(arr[1], arr[0]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] < first) {
    second = first;
    first = arr[i];
  } else if (arr[i] < second && first != arr[i]) {
    second = arr[i];
  }
}

console.log(second);
