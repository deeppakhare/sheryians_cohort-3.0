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

// function counter(){
//     let count = 0;
    
//     return function (){
//         count++;
//         return count
//     }
// }
// let count = counter()
// console.log (count())
// console.log (count())
// console.log (count())

// 7. Write a function currying example for addition.

// function addition(a){
//     return function addition(b){
//         return function addition(c){
//             return a+b+c;
//         };
//     };
// }
// console.log(addition(1)(2)(3));


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
// let arr = ["Custard", "Apple", "Mango", "Chikku", "Papaya"];
// arr.splice(2,2);
// console.log(arr);


// 2. Use `splice` to insert elements.
// let arr = ["Custard", "Apple", "Mango", "Chikku", "Papaya"];
// arr.splice(2,0,1,2,3,4)
// console.log(arr);


// 3. Use `slice` to copy array.
// let arr = ["Custard", "Apple", "Mango", "Chikku", "Papaya"];
// arr.slice(arr.push("banana"));
// console.log(arr);


// 4. Find index of an element.
// let arr = ["Custard", "Apple", "Mango", "Chikku", "Papaya"];
// console.log(arr.indexOf("Mango"));


// 5. Check if array contains a value.
// let arr = ["Custard", "Apple","Banana", "Mango", "Chikku", "Papaya"];
// console.log(arr.includes("Banana"));


// 6. Join array elements with .
// let arr = ["Custard", "Apple","Banana", "Mango", "Chikku", "Papaya"];
// console.log(arr.join('-'));
// console.log(arr);


// 7. Merge two arrays using spread operator.
// let arr = ["Custard", "Apple","Banana", "Mango", "Chikku", "Papaya"];
// let arr2 = [22,45,45,243,7,784,3,234,456]
// console.log(...arr,...arr2);


// 8. Copy array using spread operator.
// let arr = ["Custard", "Apple","Banana", "Mango", "Chikku", "Papaya"];
// console.log(arr);
// let copy = []
// copy.push(...arr)
// copy.push("JackFruit")
// console.log(copy);


// 9. Find maximum value using `Math.max`.
// let arr2 = [22,45,45,243,7,784,3,234,456]
// let arr = Math.max(...arr2);
// console.log(arr);


// 10. Swap two variables using destructuring.
// let x = 1, y = 2;
// [x, y] = [y, x];
// console.log(x, y);


// ---



// ---

// # Part 5 — Objects Basics (76–90)

// 1. Create object for a student.
// let student = {
//     name: 'Deep',
//     age: 23,
//     haveLicence: true
// }


// 2. Access properties using dot notation.
// let student = {
//     name: 'Deep',
//     age: 23,
//     haveLicence: true
// }
// console.log(student.name);


// 3. Access properties using bracket notation.
// let student = {
//     name: 'Deep',
//     age: 23,
//     haveLicence: true
// }
// console.log(student['name']);


// 4. Add new property dynamically.
// let student = {
//     name: 'Deep',
//     age: 23,
//     haveLicence: true
// }
// student.country = "India";
// console.log(student);


// 5. Update existing property.
// let student = {
//     name: 'Deep',
//     age: 23,
//     haveLicence: true
// }
// student.name = "Nayan"
// console.log(student);


// 6. Delete a property.
// let student = {
//     name: 'Deep',
//     age: 23,
//     haveLicence: true
// }
// delete student.haveLicence;
// console.log(student);


// 7. Create object method.
// let student = {
//     name: function name(name){
//         console.log(name);
//     },
//     sum: function sum(a,b){
//         console.log(a+b);
//     }
// }
// student.name("Sheriyans");
// student.sum(5,3);


// 8. Use `this` keyword inside method.
// let obj = {
//     name: "Deep",
//     welcomeMsg: function welcome(){
//         console.log("Welcome to here ", this.name);
//     }
// }
// obj.welcomeMsg();


// 9. Create nested object.
// let obj = {
//     names: {
//         firstnmae: "Deep",
//         middle: "Gnaesh",
//         surname: "Pakhare"
//     },
//     num: {
//         num1: 66,
//         num2: 69
//     }
// }
// console.log(obj);


// 10. Access deeply nested property.
// let obj = {
//     names: {
//         firstnmae: "Deep",
//         middle: "Gnaesh",
//         surname: "Pakhare"
//     },
//     num: {
//         num1: 66,
//         num2: 69
//     }
// }
// console.log(obj.names.firstnmae);
// console.log(obj.num.num2);


// 11. Destructure object properties.
// let student = {
//     name: 'Deep',
//     age: 23,
//     haveLicence: true
// }
// let {name,age} = student;
// console.log(name,age);



// 12. Rename variables while destructuring.
// let student = {
//     name: 'Deep',
//     age: 23,
//     haveLicence: true
// }
// let {name: fullName,age: year} = student;
// console.log(fullName,year);


// 13. Add default values during destructuring.
// let obj = {
//     name: 'Deep',
//     age: 20
// }
// let {name,age,country = 'India'} = obj;
// console.log(age, country);


// 14. Copy object using spread operator.
// let obj = {
//     name: 'Deep',
//     age: 20
// }
// let copy = {...obj}
// console.log(copy);


// 15. Merge two objects.
// let student = {
//     name: 'Nayan',
//     age: 32,
//     haveLicence: true
// }
// let obj = {
//     name2: 'Deep',
//     age2: 20
// }
// let merged = {...obj,...student}
// console.log(merged);



// # Part 6 — Advanced Objects + Real Logic (91–100)

// 1. Use `Object.keys()` on object.
// let student = {
//     name: 'Nayan',
//     age: 32,
//     haveLicence: true
// }
// console.log(Object.keys(student));


// 2. Use `Object.values()`.
// let student = {
//     name: 'Nayan',
//     age: 32,
//     haveLicence: true
// }
// console.log(Object.values(student));


// 3. Use `Object.entries()`.
// let student = {
//     name: 'Nayan',
//     age: 32,
//     haveLicence: true
// }
// console.log(Object.entries(student));


// 4. Loop through object using `for...in`.
// let student = {
//     name: 'Nayan',
//     age: 32,
//     haveLicence: true
// }
// for (const key in student) {
//     console.log(key,student[key]);
// }


// 5. Freeze an object and test modification.
// let student = {
//     name: 'Nayan',
//     age: 32,
//     haveLicence: true
// }
// let freeze = Object.freeze(student);
// console.log(freeze.name);


// 6. Seal an object and test modification.
// let student = {
//     name: 'Nayan',
//     age: 32,
//     haveLicence: true
// }
// let seal = Object.seal(student);
// seal.age = 33;
// console.log(seal);


// 7. Create array of objects for users.
// let users = [
//     {
//         name: 'Deep',
//         age: 22
//     },
//     {
//         name: 'Nayan',
//         age: 16
//     },
//     {
//         name: 'Pavan',
//         age: 23
//     },
//     {
//         name: 'Sultan',
//         age: 20
//     }
// ]

// console.log(users[0]);


// 8. Find user with highest age.
// let users = [
//   { name: 'Deep', age: 22 },
//   { name: 'Nayan', age: 16 },
//   { name: 'Pavan', age: 23 },
//   { name: 'Sultan', age: 20 }
// ];

// let oldestUser = users.reduce((oldest, current) => {
//   return (current.age > oldest.age) ? current : oldest;
// }, users[0]);

// console.log(oldestUser); 


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

// let arr = [1,2,3,4,5,6,7,8];
// let add = arr.reduce((acc,val) => acc + val,0);
// console.log(add);       


// 4. Implement deep clone function.



// 5. Create student management system.

// let students = [];

// let addStudent = (name, age, className) => {
//     let check = students.find(elem => 
//         elem.name === name && elem.age === age && elem.className === className
//     )
//     if(check) {
//         return "Already available student"
//     }
//     let id = students.length + 1;
//     students.push({id, name, age, className});     
//     return "Added Successfully"
// };

// let removeStudent = (id) => {
//     let check = students.find(elem => elem.id === id)
//     if(!check) return "Not available ID"
//     students = students.filter(elem => elem.id !== id);
//     return "Removed student"
// }

// let updateSudent = (id ,name, age, className) => {
//     let check = students.find(elem => elem.id === id)
//     if(!check) {
//         return "Not available ID"
//     }
//     check.name = name;
//     check.age = age;
//     check.className = className;
//     return "Updated Student data"
// }

// let getStudent = (id) => {
//     let check = students.find(elem => elem.id === id)
//     if(!check) return "Not available ID"
//     return `Studetn name is ${check.name} [class - ${check.className}] and age is ${check.age}`
// }

// let getAll = (students) => {
//     return students.forEach(element => {
//        console.log(`name - ${element.name} id - ${element.id} age - ${element.age} class - ${element.className}`)
//     });
// }

// console.log(addStudent("Deep", 18, 11));
// console.log(addStudent("Deepak", 19, 12));
// console.log(addStudent("Vitthal", 18, 11));
// console.log(addStudent("Nayan", 18, 11));
// console.log(addStudent("Annya", 19, 12));
// console.log(addStudent("OM", 18, 11));

// console.log(removeStudent(3));

// console.log(updateSudent(13,"Deep",19,12));

// console.log(getStudent(4));


// getAll(students);


// 6. Create library management system.

let library = [];


let addBook = (title, author, year, rating) => {
    let id = library.length+1;
    let exesting = library.find(elem => 
        elem.title === title && elem.author === author && elem.year === year
    )
    if(exesting) return "Book Already Exist";
    library.push({id, title, author, year, rating,isBorrowed:false})
    return "Book Added Successfully"
}

let borrowBook = (id) => {
    let check = library.find(book => book.id === id);
    if(!check) return "Invalid ID";
    check.isBorrowed = true;
    return "Borrowed Book Success"
}

let availableBooks = (library) => {
    let available = library.filter(elem => elem.isBorrowed === false);
    available.forEach(element => {
       console.log(`Available book is "${element.title}" [${element.rating} start rating]`);
    });
}

let getAll = (library) => {
    return library.forEach(elem => {
        console.log(`Name:- ${elem.title} || Anthor:- ${elem.author} || Rating:- ${elem.rating}`);
    })
}


console.log(addBook("Rich Dad Poor Dad", "XYZ", 1990, 6));
console.log(addBook("Antha Asthi Prarmbh", "Mr. Dhus", 2025, 10));
console.log(addBook("Kapad Udyog", "Sachin Narwade", 2026, 9));
console.log(addBook("Shetitil Chuka", "Allganic Farm", 2026, 7));

getAll(library);

console.log(borrowBook(2));
console.log(borrowBook(4));

availableBooks(library);




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
