let arr = [1,2,3,4,5];
let temp = arr[0];
for(let i = 1; i < arr.length; i++){
    arr[i-1] = arr[i];
    
}
arr[arr.length-1] = temp;
console.log(arr);



if (s.length !== t.length) return false;
    
    const count = {};
    
    // Count frequencies in string s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    // Decrement frequencies using string t
    for (let char of t) {
        if (!count[char]) {
            // Char missing or count falls below zero
            return false;
        }
        count[char]--;
    }
    
    return true;