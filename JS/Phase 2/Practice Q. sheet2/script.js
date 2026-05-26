// # 📑JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 2
// ## 1. Array
// ### Intermediate
// Create an array of 5 favorite movies and print all values.

// **Hint:** Use indexing

// let moviesArr = ["Berlin", "Dhurandar", "Avengers", "3-Idiots", "12th-Fail"];
// for(let a = 0 ; a <= (moviesArr.length)-1; a++){
//     console.log(moviesArr[a]);
// }

// ### Hard

// Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.

// **Hint:** Mixed data types + nested indexing

// let arr = [23, 66, 41, 2, 'splender', 'yamaha', 'alto', true, false, [22, 44, 96, 32, 'sdfijkf', 'fuiesjkd']]
// for(let i = 0; i <= (arr[9].length)-1; i++){
//     console.log(arr[9][i]);
// }

// # 2. Indexing in Array

// ### Intermediate

// Print the first and last element of an array.

// **Hint:** Use `0` and `length - 1`

// let arr = [23, 66, 41, 2, 'splender', 'yamaha', 'alto', true, false];
// console.log(arr[0]);
// console.log(arr[(arr.length)-1]);

// ### Hard

// Swap the second and second-last element using indexing.

// **Hint:** Use temporary variable

// let arr = [23, 66, 41, 2, 'splender', 'yamaha', 'alto', true, false];
// let temp = arr[1];
// arr[1] = arr[(arr.length)-2];
// arr[(arr.length)-2] = temp;
// console.log(arr);

// # 3. Multi-Dimensional Arrays

// ### Intermediate

// Create a 2D array and print all first elements of inner arrays.

// **Hint:** Double indexing

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[0][0]);
// console.log(matrix[1][0]);
// console.log(matrix[2][0]);

// ### Hard

// Find the sum of all diagonal elements in a 3x3 matrix.

// **Hint:** Same row and column index

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let sum = 0;
// for (let i = 0; i <= matrix.length - 1; i++) {
//   sum += matrix[i][i];
// }
// console.log(sum);

// # 4. length

// ### Intermediate

// Find total elements in an array without counting manually.

// **Hint:** Use `.length`

// let arr = [23, 66, 41, 2, 'splender', 'yamaha', 'alto', true, false];
// console.log(arr.length);

// ### Hard

// Create a function that checks whether array length is even or odd.

// **Hint:** Use modulus operator

// let count = (arr) => {
//     if(arr.length % 2 === 0) console.log("Even");
//     else console.log("Odd");
// }
// count([23, 66, 41, 2, 'splender', 'yamaha', 'alto', true, false])

// # 5. push()

// ### Intermediate

// Add 3 new elements at the end of array.

// **Hint:** Use `push()`

// let arr = [23, 66, 41, 2, 'splender', 'yamaha', 'alto', true, false];
// arr.push('Nayan');
// arr.push(12);
// arr.push(669);
// console.log(arr);

// ### Hard

// Add elements dynamically inside loop from another array.

// **Hint:** Loop + push


// let arr1 = [23, 66, 41, 2, "splender", "yamaha", "alto", true, false];
// let arr2 = [7, 8, 9, "deep", 43, 22, "nayan"];
// for(let i = 0; i <= arr2.length-1; i++){
//     arr1.push(arr2[i])
// }
// console.log(arr1);


// # 6. pop()

// ### Intermediate

// Remove last element and print removed value.

// **Hint:** Store `pop()` result

// ### Hard

// Keep removing elements until array becomes empty.

// **Hint:** Use `while` loop

// ---

// # 7. unshift()

// ### Intermediate

// Add one username at beginning of array.

// **Hint:** Use `unshift()`

// ### Hard

// Insert multiple elements at beginning without replacing existing ones.

// **Hint:** Multiple arguments

// ---

// # 8. shift()

// ### Intermediate

// Remove first element from array.

// **Hint:** Use `shift()`

// ### Hard

// Remove first element repeatedly until only 2 elements remain.

// **Hint:** Loop + length check

// ---

// # 9. splice()

// ### Intermediate

// Remove 2 elements from middle of array.

// **Hint:** `splice(start, deleteCount)`

// ### Hard

// Replace 3 middle elements with 5 new values.

// **Hint:** Use insertion with splice

// ---

// # 10. reverse()

// ### Intermediate

// Reverse an array using method.

// **Hint:** Use `reverse()`

// ### Hard

// Reverse only first half of array.

// **Hint:** Manual swapping

// ---

// # 11. sort()

// ### Intermediate

// Sort numbers in ascending order.

// **Hint:** Compare function

// ### Hard

// Sort array so even numbers come first and odd later.

// **Hint:** Custom compare logic

// ---

// # 12. slice()

// ### Intermediate

// Extract first 4 elements into new array.

// **Hint:** Use `slice()`

// ### Hard

// Create a copy excluding first and last element.

// **Hint:** Use start and end indexes

// ---

// # 13. concat()

// ### Intermediate

// Merge two arrays.

// **Hint:** Use `concat()`

// ### Hard

// Merge 3 arrays and remove duplicate values.

// **Hint:** Combine + loop/includes

// ---

// # 14. includes()

// ### Intermediate

// Check whether `"apple"` exists in array.

// **Hint:** Use boolean result

// ### Hard

// Check if all elements of one array exist inside another.

// **Hint:** Loop + includes

// ---

// # 15. indexOf()

// ### Intermediate

// Find index of `"Rahul"` in array.

// **Hint:** Use `indexOf()`

// ### Hard

// Find all positions of repeated number `5`.

// **Hint:** Loop through entire array

// ---

// # 16. join()

// ### Intermediate

// Convert array into comma separated string.

// **Hint:** Use `join(",")`

// ### Hard

// Convert array into sentence format.

// **Hint:** Join with spaces

// ---

// # 17. for loop

// ### Intermediate

// Print all array elements using loop.

// **Hint:** Loop through indexes

// ### Hard

// Print elements at only even indexes.

// **Hint:** Increase loop smartly

// ---

// # 18. for...of

// ### Intermediate

// Print all values using `for...of`.

// **Hint:** Direct value iteration

// ### Hard

// Count vowels from array of characters.

// **Hint:** Use conditions inside loop

// ---

// # 19. Reference Behaviour of Array

// ### Intermediate

// Assign one array to another variable and modify second one.

// **Hint:** Observe original array

// ### Hard

// Create true copy so original array does not change.

// **Hint:** Use spread operator

// ---

// # 20. Spread Operator

// ### Intermediate

// Copy array into new array.

// **Hint:** Use `...`

// ### Hard

// Merge arrays and add extra values in between.

// **Hint:** Combine spread carefully
