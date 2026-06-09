let arr = [2, 96, 69, 77, 145, 20];
// let arr = [3, 27, 27, 27, 27, 27, 27];



let first = Math.max(arr[0], arr[1]);
let second = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > first) {
    second = first;
    first = arr[i];
  } else if ((arr[i] > second && arr[i] < first) && arr[i] != first) {
    second = arr[i];
  }
}
    
console.log(second);

