var reverseString = function(s) {
  let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap elements using ES6 destructuring assignment
        [s[left], s[right]] = [s[right], s[left]];
        
        // Move pointers closer to the center
        left++;
        right--;
    }  
};