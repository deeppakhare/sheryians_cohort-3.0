let arr = [1,2,3,4,5];
let temp = arr[0];
for(let i = arr.length-2;i < arr.length; i--){
    arr[i] = arr[i+1]
}
arr[arr.length-1] = temp
console.log(arr);

