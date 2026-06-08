let arr = [1, 34, -25, 18, -12, 9, -67, 45];
let i = 0;
let j = 0;
while (i < arr.length) {
  if (arr[i] < 0) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    j++;
  }
  i++;
}
console.log(arr);
// -25, -12, -67, 18, 34, 9, 1, 45