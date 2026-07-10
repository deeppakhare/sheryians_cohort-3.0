// ## Console & Basics

const PromptSync = require("prompt-sync");

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
// console.log("                  Apple        ".trim());

// 9. Repeat the word `"Hi"` 5 times.
// let a = "Hi";
// console.log(a.repeat(5));

// 10. Print the first character of a string.
// let name = "Deep";
// console.log(name[0]);

// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`
// let name = "Aman"
// let age = 22;
// console.log(`My name is ${name} and I am ${age} years old`);

// ---

// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.
// console.log(Math.round(4.7));

// 2. Find the square root of 81.
// console.log(Math.sqrt(81));

// 3. Find the maximum number from `10, 20, 5, 99`.
// console.log(Math.max(10, 20, 5, 99));

// 4. Generate a random number between 1 and 10.
// console.log(Math.floor(Math.random()*10)+1);

// 5. Convert `"99.99"` into an integer.
// console.log(parseInt("99.99"));

// 6. Check whether `25` is an integer or not.
// console.log(Number.isInteger(25));

// 7. Use `toFixed(2)` on `3.141592`.
// let num = 3.141592;
// console.log(num.toFixed(2));

// ---

// ## Conditionals

// 1. Check whether a number is positive or negative.
// let num = -32;
// if(num > 0) console.log('It is positive');
// else console.log("It is negative");

// 2. Check whether a number is even or odd.
// let num = 69;
// if (num % 2 == 0) console.log("It is even");
// else console.log("It is odd");

// 3. Check whether a person is eligible to vote.
// let age = 16;
// if(age >= 18) console.log("Eligible for vote");
// else console.log("Not eligible for vote");

// 4. Find the largest among two numbers.
// let num1 = 45;
// let num2 = 6669;
// if (num1 > num2) console.log(`${num1} is largest`);
// else console.log(`${num2} is largest`);

// 5. Find the largest among three numbers.
// let num1 = 45;
// let num2 = 6669;
// let num3 = 41023;
// if (num1 > num2 && num1 > num3) console.log(`${num1} is largest`);
// else if (num2 > num1 && num2 > num3) console.log(`${num2} is largest`);
//  else console.log(`${num3} is largest`);

// 6. Check whether a year is a leap year.
// let year = 2024;
// if((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0){
//         console.log(`${year} is leap year`);
// } else {
//     console.log(`${year} is not leap year`);
// }

// 7. Check whether a number is divisible by both 3 and 5.
// let num = 15;
// if(num % 3 == 0 && num % 5 == 0) console.log("It is devisible");
// else console.log("It not devisible");

// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
// let marks = 10;
// if (marks >= 90 && marks <= 100) console.log("A grade");
// else if (marks >= 75 && marks < 90) console.log("B grade");
// else if (marks >= 50 && marks < 75) console.log("C grade");
// else if (marks <= 50) console.log("Fail");
// else console.log("Invalid marks ");

// 1. Check whether a character is a vowel or consonant.
// let char = "q";
// if(char === "a" ||char === "e" || char === "i" || char === "o" ||char === "u") console.log("It is vowel");
// else console.log("It is consonant");

// 2. Create a calculator using `switch` statement.
// let a = Number(prompt("Enter 1 for Add, 2 fro Sub, 3 for mult, 4 for Div"));
// switch (a) {
//     case 1:
//         var num1 = Number(prompt("Enter first number"));
//         var num2 = Number(prompt("Enter second number"));
//         console.log("Addiotn is " + (num1 + num2));
//         break;
//     case 2:
//         var num1 = Number(prompt("Enter first number"));
//         var num2 = Number(prompt("Enter second number"));
//         console.log("Substration is " + (num1 - num2));
//         break;
//     case 3:
//          var num1 = Number(prompt("Enter first number"));
//         var num2 = Number(prompt("Enter second number"));
//         console.log("Multiplication is " + (num1 * num2));
//         break;
//     case 4:
//          var num1 = Number(prompt("Enter first number"));
//         var num2 = Number(prompt("Enter second number"));
//         console.log("Division is " + (num1 / num2));
//         break;

//     default:
//         console.log("Invalid number");
//         break;
// }

// 3. Print the day name based on a number (1–7).
// let num = Number(prompt("Enter number"));
// switch (num) {
//     case 1:
//         console.log("It's Monday");
//         break;
//     case 2:
//         console.log("It's Tuesday");
//         break;
//     case 3:
//         console.log("It's Wednesday");
//         break;
//     case 4:
//         console.log("It's Thusday");
//         break;
//     case 5:
//         console.log("It's Friday");
//         break;
//     case 6:
//         console.log("It's Saturday");
//         break;
//     case 7:
//         console.log("It's Sunday");
//         break;

//     default:
//         console.log("Invalid Number");
//         break;
// }

// 4. Check whether a username is `"admin"` and password is `"1234"`.
// let userName = prompt("Enter username");
// let pasword = prompt("Enter password");
// if (userName === "admin" && pasword === "1234") console.log("You are correct");
// else console.warn("try again");

// ---

// ## Truthy & Falsy

// 1. Check whether an empty string is truthy or falsy.
// let str = "";
// if(str) console.log("truety");
// else console.log("falsy");

// 2. Check whether `0` is truthy or falsy.
// let str = 0;
// if(str) console.log("truety");
// else console.log("falsy");

// 3. Check whether `[]` is truthy or falsy.
// let str = [];
// if(str) console.log("truety");
// else console.log("falsy");

// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.
// let a
// if (a) console.log("Valid");
// else console.log("Invalid");

// ---

// ## Ternary Operator

// 1. Check whether a number is even or odd using ternary operator.
// let num = 15;
// console.log(num % 2 == 0 ? "Even" : "Odd");

// 2. Check whether age is above 18 using ternary operator.
// let age = 5;
// console.log(age > 18 ? "above" : "Below");

// 3. Find the greater number between two values using ternary operator.
// let num1 = 10;
// let num2 = 2;
// let greater = num1 > num2 ? `${num1} is greater` : `${num2} is grater`;
// console.log(greater);

// ---

// ## Mixed Practice Questions

// 1. Create a mini biodata program using variables and template literals.
// let name = "Deep";
// let surname = "Pakhare";
// let age = 21;
// let city = "Buldhana";
// console.log(`My name is ${name} ${surname}, I am ${age} years old and I live in ${city}`);


// 2. Calculate the area of a rectangle.
// var length = 5;
// var width = 3;
// var area = length * width;
// console.log(`area  of rectangle is ${area} `);


// 3. Calculate the simple interest.
// let principal = 1000;
// let rateOfIntrest = 5;
// let time = 3;
// let SI = (principal * rateOfIntrest * time) / 100;
// let total = SI + principal;
// console.log(total);


// 4. Convert temperature from Celsius to Fahrenheit.
// let celcius = 45 ;
// let faran = (celcius * 9 / 5) + 32;
// console.log(faran);


// 5. Convert kilometers into meters.
// let kilometer = 2.5;
// let meters = 1000 * kilometer;
// console.log(meters);


// 6. Calculate total marks and percentage of 5 subjects.
// let maths = 73;
// let science = 80;
// let marathi = 86;
// let hindi = 84;
// let english = 90;
// let total = marathi + science + hindi + english + maths;
// let percentage = ( total / 500 ) * 100;
// console.log(percentage);
// console.log(total);

// 7. Calculate electricity bill based on units consumed.
// let fixed = 130;
// let unit = 310;
// let bill = 0;
// if(unit > 0 && unit <= 100) {
//     bill = unit * 3.98;
// }
// else if (unit >= 101 && unit <= 300) {
//     bill = 100 * 3.98 + (unit - 100) * 10.95;
// }
// else if (unit >= 301 && unit <= 500) {
//     bill = 100 * 3.98 + 199 * 10.95 + (unit - 299) * 14;
// }
// else console.log("Invalid unit");

// console.log(Math.floor(fixed + bill));


// 8. Create a username generator using first name and birth year.
// let firstName = "Deep";
// let birthYear = 2004;
// let username = first + birthYear;
// console.log(username);


// 9. Check whether a string starts with a specific letter.
// let str = '@gmail.com';
// let specail = '@'
// console.log(str.charAt(0)==specail);


// 10. Count the total characters in a sentence excluding spaces.
// let sen = "Hello welcome here";
// console.log(sen.replaceAll(" ","").length);


// ---

// ## Logical Thinking Questions

// 1. Take two numbers and print which one is greater.
// let num1 = 122;
// let num2 = 24;
// if(num1 > num2) console.log("greater number ", num1);
// else console.log("greater number ", num2);

// 2. Check whether a number lies between 10 and 50.
// let num = 49;
// if(num >= 10 && num <= 50) console.log("It lies");
// else console.log("Not lies");


// 3. Check whether a password length is greater than 8.
// let pass = "324355353";
// if (pass.length >= 8) console.log("Greater than 8");
// else console.log("Smaller than 8");


// 4. Check if a person can drive:
// - age > 18
// - 'has license = true
// let age = 19;
// let license = true;
// if(age > 18 && license == true) console.log("You can drive");
// else console.log("Dont drive");


// 1. Check whether a number is divisible by 2, 3, or both.
// let num = 4;
// if(num % 2== 0 && num % 3 == 0) console.log("Divisible by both");
// else if(num % 3 == 0)console.log("Divisible by 3");
// else if (num % 2 == 0) console.log("Divisible by 2");
// else console.log("Invalid number");


// 2. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
// let date = new Date;
// let time = date.getHours();
// if(time >= 5 && time < 12) console.log("Good Morning");
// else if(time >= 12 && time < 17) console.log("Good Afternoon");
// else if(time >= 17 && time < 22) console.log("Good Evening");
// else console.log("Good Night");


// 3. Find whether a number is a multiple of 10.
// let num = 155;
// if (num % 10 == 0) console.log("Multiple of 10");
// else console.log("Not multiple");


// 4. Create a simple discount calculator.
// let price = 1250;
// let discount = 10;
// let total = price * discount / 100;
// console.log(total);


// 5. Check whether a product is in stock.
// let store = ['tap', 'pipe', 'solution', 'tape', 'elbo', 'coupling'];
// let product = 'joiner';
// if(store.includes(product)) console.log("In stock");
// else console.log("Out of Stock");


// 6. Calculate final bill after GST.
// let amount = 13580;
// let gst = 18;
// let gstAmount = amount * 18 / 100;
// let total = amount + gstAmount;
// console.log(total);


// ---

// ## Challenge Questions for Beginners

// 1. Generate a random OTP of 4 digits.
// let random = Math.floor(1000 + Math.random() * 9000);
// console.log(random);

// 2. Reverse a 3-letter string manually.

// 3. Find the last character of a string.
// let string = "Deep";
// let length = string.length;
// console.log(length);
// console.log(string.charAt(length-1));


// 4. Convert a full name into uppercase initials.
// 5. Check whether two strings are equal ignoring case sensitivity.
// let str1 = "Deep";
// let str2 = "Deep";
// if(str1 === str2) console.log("both are equal");
// else console.log("are not equal");


// 6. Create a simple login validation system.
// let username = "Deep";
// let password = 6669;
// if(username === "Deep" && password === 6669) console.log("logged in");
// else console.log("Wrong data");


// 7. Find whether a number is a 2-digit or 3-digit number.
// let num = 12;
// let string = String(num);
// let length = string.length

// if(length == 2) console.log("It is 2 digit");
// else if(length == 3) console.log("It is 3 digit");
// else console.log("Invalid number");


// 8. Create a mini ATM balance checker.
// let pin = Number(prompt("Enter four digit pin"));
// if(pin === 6669) console.log("Your balance is 20500 rs");
// else console.log("Invalid pin reenter");


// 9. Simulate a traffic light system using `switch`.
// let light = "Yello";
// switch (light) {
//     case "Red":
//             console.log("Stop the car");
//         break;
//     case "Green":
//             console.log("Go the car");
//         break;
//     case "Yellow":
//             console.log("Slow the car red light is blinking");
//         break;

//     default:
//         console.log("Invalid light");

//         break;
// }


// 10. Build a small marksheet generator using variables and conditionals.
// var marks = 65;
// if (marks >= 95 && marks <= 100) console.log("You got A grade");
// else if (marks >= 85 && marks <= 94) console.log("You got B grade");
// else if (marks >= 75 && marks <= 84) console.log("You got C grade");
// else if (marks >= 65 && marks <= 74) console.log("You got D grade");
// else if (marks >= 55 && marks <= 64) console.log("You got E grade");
// else console.log("You are Fail");


// ## Mini Project

// ### Project 1: Simple Calculator
    // Take user input;

// const prompt = require('prompt-sync')();
// let num1 = Number(prompt("Enter the first number "));
// let operator = prompt("Enter operator (+, -, /, %, *) ");
// let num2 = Number(prompt("Enter the second number "));

// let result;

// if(operator == "+" || operator == "-" || operator == "/" || operator == "%" || operator == "*" ){
//     switch(operator){
//     case "+" :
//         result = num1 + num2;
//         break;
//     case "-" :
//         result = num1 - num2;
//         break;
//     case "*" :
//         result = num1 * num2;
//         break;
//     case "/":
//         result = num1 / num2;
//         break;
//     case "%":
//         result = num1 % num2;
//         break;
//     default:
//         break;
// }
// } else{
//    return console.log("Invalid please select proper operator ");
// }

// console.log(`Calulation is ${num1} ${operator} ${num2} = ${result}`);


// ### Project 2: FizzBuzz (the classic interview question)
//     Print numbers 1 to 50. But:
//     - For multiples of 3, print "Fizz"
//     - For multiples of 5, print "Buzz"
//     - For multiples of both, print "FizzBuzz"

// for(let i = 1; i <= 50; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//         continue;
//     }else if(i % 3 == 0) {
//         console.log("Fizz");
//         continue;
//     } else if (i % 5 == 0){
//         console.log("Buzz");
//         continue;
//     } 
//     console.log(i);
// }


// ### Project 3: Number Guessing Game

// const prompt = require('prompt-sync')();
// let num = Number(prompt("Guess number in 1 to 10:- "));

// let random = Math.floor(Math.random() * 10)+1;
// if(random == num) {
//     console.log("You are correct");
// } else {
//     console.log(`wrong! please retry number is ${random}`);

// }


// ### Project 4: Temperature Converter
//     Take a temperature and a unit (C or F), convert to the other.

// const prompt = require('prompt-sync')();
// let temp = Number(prompt("Enter temperature:"));
// let unit = prompt("Is it in C or F?").toUpperCase();

// if (unit === "C") {
//     console.log(`${temp}°C = ${(temp * 9/5) + 32}°F`);
// } else if (unit === "F") {
//     console.log(`${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C`);
// } else {
//     console.log("Invalid unit");
// }


// ### Project 5: Count Vowels in a String

const prompt = require('prompt-sync')();
let str = prompt("Enter a string:").toLowerCase();
let vowels = "aeiou";
let count = 0;

for (let char of str) {
    if (vowels.includes(char)) count++;
}

console.log(`Number of vowels: ${count}`);