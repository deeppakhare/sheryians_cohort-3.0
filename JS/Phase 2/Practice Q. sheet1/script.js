// # JavaScript Beginner Practice Questions (Phase -2 ) Sheet  - 1


// ---

// # Part 1 — Functions Basics (1–20)

// ## Beginner Level

// 1. Create a function named `greet` that prints `"Hello World"`.
// function greet(){
//     console.log("Hello World");
// }
// greet();

// 2. Create a function `add(a, b)` that returns the sum.
// function add(a,b){
//     return sum = a + b;
// }
// console.log(add(5,9));

// 3. Write a function to calculate the square of a number.
// function square(a){
//     return a*a;
// }
// console.log(square(25));

// 4. Create a function that checks whether a number is even or odd.
// let even = function (num){
//     num % 2 == 0 ? console.log("It is even") : console.log("It is Odd")
// }
// even(37);

// 5. Write a function that converts Celsius to Fahrenheit.
// let celsius = function (temp) {
//     return (temp * 9 / 5) + 32;
// }
// console.log(celsius(5));

// 6. Create a function with default parameter `"Guest"`.
// function boy(name = "Guest") {
//     console.log(name);
// }
// boy();

// 7. Write a function that returns the greater of two numbers.
// let greater = (a, b) => {
//     return a > b ? `${a} is greater` : `${b} is greater`
// }
// console.log(greater(32, 88));

// 8. Create a function to calculate area of rectangle.
// let area = (len, bre) => {
//     return len * bre;
// }
// console.log(area(5,10));

// 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
// let level = (age) => {
//     return age >= 18 ? `is Adult` : `is Minior`;
// }
// console.log(level(12));

// 10. Create a function to reverse a string.
// let string = (str) => {
//     let reverse = "";
//     for(let i = str.length-1; i >= 0; i--){
//         reverse += str[i];
//     }
//     console.log(reverse);
// }
// string("Deep")

// ---

// ## Intermediate Level

// 1. Write a function expression for multiplication.
// let multi = (a,b) => {
//     return  a*b;
// }
// console.log(multi(5,12));

// 2. Convert a normal function into an arrow function.
// ********** Normal Function ************
// function hello(){
//     console.log("Hell");
// }
// hello();
// ************** Arrow Function ****************
// let hell = () => {
//     console.log("Hell");
// }
// hell();

// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
// let sum = (...num) => {
//     var sum1 = 0;
//     for(let i = 0; i <= num.length-1; i++){
//         sum1 = sum1 + num[i];
//     }
//     console.log(sum1);
// }
// sum(3,2,2,2);

// 4. Write a function that counts vowels in a string.
// let string = (str) => {
//     let count = 0;
//     for (const ch of str) {
//         if(ch === 'a' ||ch === 'e' ||ch === 'i' ||ch === 'o' ||ch === 'u') count++;
//     }
//     console.log(count);
// }
// string('Wlcome to Sheriyans coding school')

// 5. Create a function that checks if a string is palindrome.
// function reverseString(str) {
//     let reverse = "";
//     for(let i = str.length-1; i >= 0; i-- ){
//         reverse += str[i];
//     }
//     return reverse;
// }
// console.log(reverseString("Deep is my name"));

// 6. Write a callback function example using `setTimeout`.
// setTimeout(function name(){
//     console.log("Deep");
// },1000)

// 7. Create a higher-order function that executes another function twice.
// let parent = () => {
//     console.log(`I am parent`);
//     function child(){
//         console.log(`I am Child`);
//     }
//     child()
// }
// parent()

// 8. Write a function that returns another function.
// let parent = () => {
//     console.log(`I am parent`);
//     function child(){
//         console.log(`I am Child`);
//     }
//     child()
// }
// parent()

// 9. Create a pure function for subtraction.
// let sub = (a,b) => {
//     return a - b
// }
// console.log(sub(4,2));

// 10. Create an impure function using global variable modification.
// let count = 0;
// function impure() {
//     count++;
//     return count;
// }
// console.log(impure());
// console.log(impure());
// console.log(impure());

// ---

// # Part 2 — Advanced Functions (21–35)

// 1. Write a recursive function for factorial.
// let fact = (num) => {
//   if (num === 0 || num === 1) return 1;

//   return num * fact(num-1)
// }
// console.log(fact(5));


// 2. Write recursive Fibonacci function.
// let fibonacci = (num) => {
//     if(num === 0) return 0;
//     if(num === 1) return 1;
//     return fibonacci(num - 1) + fibonacci (num - 2)
// }
// console.log(fibonacci(3));


// 3. Create a function that finds power using recursion.


// 4. Create an IIFE that prints `"Executed"`.
// (function gree(){
//   console.log("Executed");
// })()


// 5. Write a function that memoizes factorial calculation.
// let memorize = () => {
//     let cache = {}

//     return function factorial(num){
//         if(cache[num] !== undefined) return cache[num];

//         if(num === 0 || num === 1){
//             cache[num] == 1;
//             return 1;
//         }

//         cache[num] = num * factorial(num - 1);
//         return cache[num];
//     }
    
//     factorial.getCache = () => cache;
//     return factorial;
// }
// const fact = memorize();
// fact(3);
// fact(5);
// console.log(fact.getCache());


// 6. Create a closure counter function.
// 7. Write a function currying example for addition.
// 8. Create debounce function logic.
// 9. Create throttle function logic.
// 10. Write a function that executes only once.
// function greet(){
//     console.log("Hello")
// }
// greet();


// 11. Create custom implementation of `map`.
// let greet = [22,233,44,5,6,67,7]
// let mapp = greet.map(function hello(num){
//     console.log("Hello",num);
// })
// console.log(mapp);


// 12. Create custom implementation of `filter`.
// let greet = [22,233,44,5,6,67,7]
// let filter = greet.filter(function even (num) {
//     return num % 2 == 0;
// })
// console.log(filter);


// 13. Create custom implementation of `reduce`.
// let greet = [22,233,44,5,6,67,7]
// let sum =  greet.reduce(function(acc, val) {
//     return acc + val;
// },0)
// console.log(sum);


// 14. Create custom `forEach`.
// let greet = [22,233,44,5,6,67,7]
// let sum = greet.forEach(function sum(num){
//     console.log(num);
    
// });
// console.log(sum);


// 15. Explain output:

// ```jsx
// function test() {
//     return;
//     console.log("Hello");
// }
// console.log(test());
// ```

// Output = undefined

// # Part 3 — Arrays Basics (36–55)

// ## Beginner

// 1. Create an array of 5 fruits.
// let arr = ["Custard", "Apple", "Mango", "Chikku", "Papaya"];


// 2. Print first and last element of array.
// let arr = ["Custard", "Apple", "Mango", "Chikku", "Papaya"];
// console.log(arr[0]);
// console.log(arr[arr.length-1]);


// 3. Find length of array.
// let arr = ["Custard", "Apple", "Mango", "Chikku", "Papaya"];
// let length = arr.length;
// console.log(length);


// 4. Add element at end using `push`.
// let arr = ["Custard", "Apple", "Mango", "Chikku", "Papaya"];
// arr.push("JackFruit")
// console.log(arr);


// 5. Remove last element using `pop`.
// let arr = ["Custard", "Apple", "Mango", "Chikku", "Papaya"];
// arr.pop(arr[arr.length-1]);
// console.log(arr);


// 6. Add element at beginning using `unshift`.
// let arr = ["Custard", "Apple", "Mango", "Chikku", "Papaya"];
// arr.unshift("Berry");
// console.log(arr);


// 7. Remove first element using `shift`.
// let arr = ["Custard", "Apple", "Mango", "Chikku", "Papaya"];
// arr.shift();
// console.log(arr);


// 8. Reverse an array.
// let arr = ["Custard", "Apple", "Mango", "Chikku", "Papaya"];
// arr.reverse()
// console.log(arr);


// 9. Sort numbers ascending.
// let arr = [22,45,45,243,7,784,3,234,456]
// arr.sort((a,b) => a-b);
// console.log(arr);


// 10. Sort numbers descending.
// let arr = [22,45,45,243,7,784,3,234,456]
// arr.sort((a,b) => b-a);
// console.log(arr);

// ---

// ## Intermediate

// 1. Use `splice` to remove elements.
// 2. Use `splice` to insert elements.
// 3. Use `slice` to copy array.
// 4. Find index of an element.
// 5. Check if array contains a value.
// 6. Join array elements with .
// 7. Merge two arrays using spread operator.
// 8. Copy array using spread operator.
// 9. Find maximum value using `Math.max`.
// 10. Swap two variables using destructuring.

// ---



// ---

// # Part 5 — Objects Basics (76–90)

// 1. Create object for a student.
// 2. Access properties using dot notation.
// 3. Access properties using bracket notation.
// 4. Add new property dynamically.
// 5. Update existing property.
// 6. Delete a property.
// 7. Create object method.
// 8. Use `this` keyword inside method.
// 9. Create nested object.
// 10. Access deeply nested property.
// 11. Destructure object properties.
// 12. Rename variables while destructuring.
// 13. Add default values during destructuring.
// 14. Copy object using spread operator.
// 15. Merge two objects.

// ---

// # Part 6 — Advanced Objects + Real Logic (91–100)

// 1. Use `Object.keys()` on object.
// 2. Use `Object.values()`.
// 3. Use `Object.entries()`.
// 4. Loop through object using `for...in`.
// 5. Freeze an object and test modification.
// 6. Seal an object and test modification.
// 7. Create array of objects for users.
// 8. Find user with highest age.
// 9. Build a mini TODO app using arrays + objects.
// 10. Build a shopping cart system with:
// - add item
// - remove item
// - calculate total
// - quantity update

// ---

// > These questions are optional, but if you want to improve your JavaScript and logic building skills, then try solving them.Take help from ChatGPT, Google, or YouTube if needed, but understand the logic instead of copying answers.
// >

// # Bonus Hard Questions

// ## Debugging Questions

// ### 101.

// ```jsx
// const arr = [1,2,3];
// arr[10] = 5;
// console.log(arr.length);
// ```

// ### 102.

// ```jsx
// console.log(typeof []);
// ```

// ### 103.

// ```jsx
// console.log([] == false);
// ```

// ### 104.

// ```jsx
// console.log([1,2] + [3,4]);
// ```

// ### 105.

// ```jsx
// function x(a,b){
//    return a+b;
// }
// console.log(x(2));
// ```

// ---

// # Ultra Advanced Practice

// 1. Build custom `Array.prototype.map`.
// 2. Build custom `Array.prototype.filter`.
// 3. Build custom `Array.prototype.reduce`.
// 4. Implement deep clone function.
// 5. Create student management system.
// 6. Create library management system.
// 7. Create expense tracker logic.
// 8. Build inventory management system.
// 9. Create function composition utility.
// 10. Build calculator using objects and methods.

// ---

// # Scenario-Based Questions

// 1. You have an array of users. Return only active users.
// 2. Calculate total revenue from orders array.
// 3. Find second largest number in array.
// 4. Find missing number in array.
// 5. Check whether two objects are equal.

// ---

// # Interview-Level Questions

// 1. Difference between:
// - function declaration
// - function expression
// - arrow function
// 1. Difference between:
// - `slice`
// - `splice`
// 1. Difference between:
// - `map`
// - `filter`
// - `reduce`
// 1. Difference between:
// - `for...in`
// - `for...of`
// 1. Difference between:
// - shallow copy
// - deep copy

// ---

// # Logic Building Questions

// 1. Rotate array by k positions.
// 2. Find frequency of characters in string.
// 3. Find longest word in sentence.
// 4. Check if two strings are anagrams.
// 5. Capitalize first letter of every word.
// 6. Remove falsy values from array.
// 7. Convert array into object.
// 8. Convert object into array.
// 9. Find duplicate elements.
// 10. Merge two sorted arrays.

// ---

// # Real World Practice

// 1. Create authentication validation functions.
// 2. Create OTP generator.
// 3. Create password strength checker.
// 4. Build leaderboard system.
// 5. Create attendance management logic.

// ---

// # Advanced Functional Programming

// 1. Implement compose function.
// 2. Implement pipe function.
// 3. Create custom event emitter.
// 4. Build promise-like function logic.
// 5. Create retry mechanism function.

// ---

// # Final Challenge Questions

// 1. Build complete Notes App logic.
// 2. Build Student Dashboard logic.
// 3. Build Quiz App data handling.
// 4. Build E-commerce Cart System.
// 5. Build Mini Netflix Watchlist System.
