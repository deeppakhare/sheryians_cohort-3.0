let arr = [1,2,3,4,5];
let temp = arr[arr.length-1];
for(let i = arr.length-1;i >= 1; i--){
    arr[i] = arr[i-1]
}
arr[0] = temp
console.log(arr);

