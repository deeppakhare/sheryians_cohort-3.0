let arr = [ 0, 0, 1,  0, 1, 0]
let i= 0;
let j= 0;
while(i < arr.length){
    if(arr[i] == 0){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        j++; 
    }
    i++

}
console.log(arr);
