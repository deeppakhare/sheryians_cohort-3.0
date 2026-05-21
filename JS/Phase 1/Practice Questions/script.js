// ## Console & Basics

// 1. Print `"Hello JavaScript"` in the console.
// console.log("Hello Javascript");
    

// 2. Print your name, age, and city using one `console.log()`.
// console.log(`Name:- Deep, Age:- 21, City:- Buldhana`);


// 3. Print a warning message using `console.warn()`.
// console.warn("Check your internet connection");


// 4. Print an error message using `console.error()`.
// console.error("Error to laod");


// 5. Use `console.table()` to display an array of 5 numbers.
// console.table(["Deep","Nayan","Dhananjay"])


// ---

// ## Variables

// 1. Create a variable called `studentName` and store your name in it.
// var studentName = "Deep";
// console.log(studentName);


// 2. Create a variable `age` and print it.
// var age = 18;
// console.log(age);


// 3. Create two variables and swap their values.
// var first = 12;
// var second = 10;
// var x = second;
// var second = first;
// var first = x;
// console.log(first);
// console.log(second);


// 4. Create a constant variable for `PI` and print it.
// const PI = 3.14;
// console.log(PI);


// 5. Declare a variable without assigning a value and print it.
// var a 
// console.log(a);


// 6. Create a variable `score` and increase it by 10.
// var score = 15;
// score += 10;
// console.log(score);


// 7. Create three variables for first name, last name, and full name.
// var firstNmae = "Deep";
// var lastName = "Pakhare";
// var fullNmae = firstNmae + lastName;
// console.log(fullNmae);


// ---

// ## Data Types

// 1. Create variables of type string, number, boolean, null, and undefined.
// var string = "Deep";
// var number = 17;
// var boolean = 86.60;
// var arr = null;
// var undefined

// console.log(string);
// console.log(number);
// console.log(boolean);
// console.log(arr);
// console.log(undefined);


// 2. Check the type of different variables using `typeof`.
// var string = "Deep";
// var number = 17;
// var boolean = 86.6045466;
// var arr = null;
// var undefined
// console.log(typeof(string));
// console.log(typeof(number));
// console.log(typeof(boolean));
// console.log(typeof(arr));
// console.log(typeof(undefined));


// 3. Store your mobile number in a variable and check its type.
// var mobileNumber = 8530316804;
// console.log(typeof(mobileNumber));


// 4. Create a variable with value `null` and check its type.
// var a = null;
// console.log(typeof(a));


// 5. Create a bigint number and print it.
// var bigNum = 9007199254740993n;
// console.log(bigNum);

// ---

// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.
// var string = "50";
// string = Number(string);
// console.log(string);


// 2. Convert the number `100` into a string.
// var num = 100;
// num = String(num);
// console.log(num);


// 3. Convert `"true"` into a boolean.
// var num = "true";
// num = Boolean(num);
// console.log(num);


// 4. Check the output of:
// - `"5" + 2`
// console.log("5" + 2);

// - `"5" - 2`
// console.log("5" - 2);

// - `true + 1`
// console.log(true + 1);

// 1. Create a variable with value `"123abc"` and convert it into a number.
// var num = "123abc";
// num = Number(num);
// console.log(num);

// 2. Use `parseInt()` on `"500px"`.
// console.log(parseInt("500px"));


// ---

// ## Operators

// 1. Add two numbers and print the result.
// let num1 = 66;
// let num2 = 69;
// console.log(num1+num2);


// 2. Find the remainder when 25 is divided by 4.
// let num = 25;
// let a = 4;
// let remainder = num % a;
// console.log(remainder);


// 3. Find the square of a number using exponent operator.
// let a = 5;
// console.log(a*a);

// 4. Increment a variable using `++`.
// let a =5;
// a++;
// console.log(a);


// 5. Decrement a variable using `-`.
// let b = 6;
// b--;
// console.log(b);


// 6. Use `+=` operator to increase a variable by 20.
// let a = 15;
// a += 20;
// console.log(a);


// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
// console.log(7 > 5);
// console.log(2 < 5);
// console.log(3 >= 5);
// console.log(6 <= 5);


// 8. Check if two values are strictly equal using `===`.
// let num1 = 5;
// let num2 = "5";
// console.log(num1 === num2);


// 9. Compare `"10"` and `10` using both `==` and `===`.
// console.log(10 == "10");
// console.log(10 === "10");


// 10. Create two boolean variables and test `&&`, `||`, and `!`.
// var a = 34.22;
// var b = 56.33;
// console.log(a > b && b > a);
// console.log(a > b || b > a);
// console.log(a != a);

// ---

// ## Strings

// 1. Create a string and print its length.
// let a = "Deep";
// console.log(a.length);


// 2. Convert a string into uppercase.
// let a = "Deep";
// console.log(a.toUpperCase());


// 3. Convert a string into lowercase.
// let a = "DEEP";
// console.log(a.toLowerCase());


// 4. Check if a string includes the word `"JavaScript"`.
// let a = "I love JavaScript";
// console.log(a.includes("JavaScript"));


// // 5. Extract the word `"World"` from `"Hello World"`.
// let a = "Hello World";
// console.log(a.slice(5,11));


// 6. Replace `"apple"` with `"mango"` in a sentence.
// let a = "Apple is king of Fruit"
// console.log(a.replace("Apple","Mango"));


// 7. Split `"HTML,CSS,JS"` into an array.
// let a = "HTML,CSS,JS";
// console.log(a.split(","));


// 8. Remove extra spaces from a string.
let a = " Apple                       is the fruit";
console.log(a.trim());

// 9. Repeat the word `"Hi"` 5 times.
// 10. Print the first character of a string.
// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`

// ---

// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.
// 2. Find the square root of 81.
// 3. Find the maximum number from `10, 20, 5, 99`.
// 4. Generate a random number between 1 and 10.
// 5. Convert `"99.99"` into an integer.
// 6. Check whether `25` is an integer or not.
// 7. Use `toFixed(2)` on `3.141592`.

// ---

// ## Conditionals

// 1. Check whether a number is positive or negative.
// 2. Check whether a number is even or odd.
// 3. Check whether a person is eligible to vote.
// 4. Find the largest among two numbers.
// 5. Find the largest among three numbers.
// 6. Check whether a year is a leap year.
// 7. Check whether a number is divisible by both 3 and 5.
// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
// 1. Check whether a character is a vowel or consonant.
// 2. Create a calculator using `switch` statement.
// 3. Print the day name based on a number (1–7).
// 4. Check whether a username is `"admin"` and password is `"1234"`.

// ---

// ## Truthy & Falsy

// 1. Check whether an empty string is truthy or falsy.
// 2. Check whether `0` is truthy or falsy.
// 3. Check whether `[]` is truthy or falsy.
// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.

// ---

// ## Ternary Operator

// 1. Check whether a number is even or odd using ternary operator.
// 2. Check whether age is above 18 using ternary operator.
// 3. Find the greater number between two values using ternary operator.

// ---

// ## Mixed Practice Questions

// 1. Create a mini biodata program using variables and template literals.
// 2. Calculate the area of a rectangle.
// 3. Calculate the simple interest.
// 4. Convert temperature from Celsius to Fahrenheit.
// 5. Convert kilometers into meters.
// 6. Calculate total marks and percentage of 5 subjects.
// 7. Calculate electricity bill based on units consumed.
// 8. Create a username generator using first name and birth year.
// 9. Check whether a string starts with a specific letter.
// 10. Count the total characters in a sentence excluding spaces.

// ---

// ## Logical Thinking Questions

// 1. Take two numbers and print which one is greater.
// 2. Check whether a number lies between 10 and 50.
// 3. Check whether a password length is greater than 8.
// 4. Check if a person can drive:
// - age > 18
// - has license = true
// 1. Check whether a number is divisible by 2, 3, or both.
// 2. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
// 3. Find whether a number is a multiple of 10.
// 4. Create a simple discount calculator.
// 5. Check whether a product is in stock.
// 6. Calculate final bill after GST.

// ---

// ## Challenge Questions for Beginners

// 1. Generate a random OTP of 4 digits.
// 2. Reverse a 3-letter string manually.
// 3. Find the last character of a string.
// 4. Convert a full name into uppercase initials.
// 5. Check whether two strings are equal ignoring case sensitivity.
// 6. Create a simple login validation system.
// 7. Find whether a number is a 2-digit or 3-digit number.
// 8. Create a mini ATM balance checker.
// 9. Simulate a traffic light system using `switch`.
// 10. Build a small marksheet generator using variables and conditionals.A