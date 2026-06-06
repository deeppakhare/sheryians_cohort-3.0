// # 📑JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 3

// ## 1. `forEach()`

// ### Intermediate Question

// You are given an array of prices.

// Print each price with `"₹"` before it.

// ```jsx
// let prices = [100, 250, 399, 499];
// ```

// ### Hint

// - `forEach()` runs once for every element.
// - You don't return anything here.
// - Use `console.log()` inside it.

// let prices = [100, 250, 399, 499];
// prices.forEach((elem) => {
//     console.log(`₹ ${elem}`);
// })



// ### Hard Question

// You are given an array of students.

// ```jsx
// let students = [
//   { name: "Anubhav", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Aman", marks: 90 },
// ];
// ```

// Print:

// - `"Pass"` if marks are greater than 50
// - `"Fail"` otherwise

// Output format:

// ```jsx
// Anubhav - Pass
// Rahul - Fail
// ```

// ### Hint

// - Loop through objects using `forEach()`
// - Use condition checking inside loop.


// let students = [
//   { name: "Anubhav", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Aman", marks: 90 },
// ];

// students.forEach((elem) => {
//     if(elem.marks > 50) console.log(`${elem.name} - Pass`);
//     else console.log(`${elem.name} - Fail`);
// })


// # 2. `map()`

// ### Intermediate Question

// Convert all names into uppercase.

// ```jsx
// let names = ["anubhav", "rahul", "aman"];
// ```

// Expected Output:

// ```jsx
// ["ANUBHAV", "RAHUL", "AMAN"]
// ```

// ### Hint

// - `map()` creates a new array.
// - Use `.toUpperCase()`.


// let names = ["anubhav", "rahul", "aman"];
// let upper = names.map((elem) => {
//     return elem.toUpperCase();
// });
// console.log(upper);



// ### Hard Question

// You are given products.

// ```jsx
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
// ];
// ```

// Create a new array where:

// - Every product has a new property `discountPrice`
// - Discount is 10%

// Expected:

// ```jsx
// [
//   { name: "Laptop", price: 50000, discountPrice: 45000 }
// ]
// ```

// ### Hint

// - Return a new object from `map()`
// - Formula:

// ```jsx
// price - (price * 10 / 100)
// ```


// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
// ];
// let discount = products.map((elem) => {
//    return {
//     ...elem, // spread existing properties
//     discountPrice: elem.price - (elem.price * 10 / 100)
//   };
// })
// console.log(discount);


// # 3. `filter()`

// ### Intermediate Question

// Filter all even numbers.

// ```jsx
// let nums = [1,2,3,4,5,6,7,8];
// ```

// Expected Output:

// ```jsx
// [2,4,6,8]
// ```

// ### Hint

// - `filter()` keeps elements when condition is `true`.


// let nums = [1,2,3,4,5,6,7,8];
// let gw = nums.filter((elem) => {
//     if (elem % 2 == 0) return elem;
    
// })
// console.log(gw);


// ### Hard Question

// You are given users.

// ```jsx
// let users = [
//   { name: "Anubhav", active: true },
//   { name: "Rahul", active: false },
//   { name: "Aman", active: true },
// ];
// ```

// Return only active users.

// ### Hint

// - Check `active === true`
// - Return condition directly.


// let users = [
//   { name: "Anubhav", active: true },
//   { name: "Rahul", active: false },
//   { name: "Aman", active: true },
// ];
// users.filter((elem) => {
//     if(elem.active === true) console.log(elem.name); 
// }) 


// # 4. `reduce()`

// ### Intermediate Question

// Find total sum of array.

// ```jsx
// let nums = [10,20,30,40];
// ```

// Expected Output:

// ```jsx
// 100
// ```

// ### Hint

// - `reduce()` needs:
//     - accumulator
//     - current value


// let nums = [10,20,30,40];
// let sum = nums.reduce((accu, val) => {
//     return accu + val;
// },0)
// console.log(sum);


// ### Hard Question

// Count frequency of elements.

// ```jsx
// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// ```

// Expected Output:

// ```jsx
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
// ```

// ### Hint 

// - Create an empty object `{}` as initial value.
// - Increase count if already exists.

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let obj = {};
count = 0;





// # 5. `find()`

// ### Intermediate Question

// Find first number greater than 50.

// ```jsx
// let nums = [20, 35, 60, 80];
// ```

// Expected Output:

// ```jsx
// 60
// ```

// let nums = [20, 35, 60, 80];
// let sort =  nums.find(function (elem){
//       if(elem>50) return elem
// })
// console.log(sort);


// ### Hint

// - `find()` returns first matching element.

// ---

// ### Hard Question

// Find a user with username `"admin"`.

// ```jsx
// let users = [
//   { username: "rahul" },
//   { username: "admin" },
//   { username: "aman" }
// ];
// ```

// ### Hint

// - Compare inside callback:

// ```jsx
// user.username === "admin"
// ```

// let users = [
//   { username: "rahul" },
//   { username: "admin" },
//   { username: "aman" }
// ];
// let admin = users.find((elem) => {
//     if(elem.username == "admin") return elem;    
// });
// console.log(admin);


// # 6. `findIndex()`

// ### Intermediate Question

// Find index of number `90`.

// ```jsx
// let nums = [10, 40, 90, 50];
// ```

// ### Hint

// - `findIndex()` returns index number.

// let arr = [10, 20, 40 ,50, 90];
// console.log(arr.indexOf(90));


// ### Hard Question

// Find index of first failed student.

// ```jsx
// let students = [
//   { name: "A", marks: 90 },
//   { name: "B", marks: 30 },
//   { name: "C", marks: 70 },
// ];
// ```

// Condition:

// - Failed if marks < 40

// ### Hint

// - Use condition directly inside callback.

// let students = [
//   { name: "A", marks: 90 },
//   { name: "B", marks: 30 },
//   { name: "C", marks: 70 }
// ];
// students.forEach((elem) => {
//     if(elem.marks < 40) console.log(students.indexOf(elem));
// })


// # 7. `some()`

// ### Intermediate Question

// Check if any number is negative.

// ```jsx
// let nums = [10, 20, -5, 40];
// ```

// Expected Output:

// ```jsx
// true
// ```

let nums = [10, 20, -5, 40];
nums.some((a,b) => {
    console.log(a);
    console.log(b);
    
});


// ### Hint

// - `some()` returns true if at least one condition matches.

// ---

// ### Hard Question

// Check if any product is out of stock.

// ```jsx
// let products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Phone", stock: 0 },
// ];
// ```

// ### Hint

// - Check:

// ```jsx
// stock === 0
// ```

// ---

// # 8. `every()`

// ### Intermediate Question

// Check if all numbers are positive.

// ```jsx
// let nums = [10, 20, 30, 40];
// ```

// Expected Output:

// ```jsx
// true
// ```

// ### Hint

// - `every()` checks all elements.

// ---

// ### Hard Question

// Check if all students passed.

// ```jsx
// let students = [
//   { name: "A", marks: 80 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 60 },
// ];
// ```

// Passing marks:

// ```jsx
// 40
// ```

// ### Hint

// - Return condition:

// ```jsx
// marks >= 40
// ```