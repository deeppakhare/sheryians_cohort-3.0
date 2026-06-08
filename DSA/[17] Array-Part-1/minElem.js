let arr = [23, 14, 56, 87, 44, 90, 27];

let min = arr[0];
for(let i = 1 ; i<arr.length;i++){
    if(arr[i] < min) min = arr[i];
}
console.log(min);
