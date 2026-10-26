// *********        Question 01        *********

// let a = 10
// let b = 20
// let c = 30

// var sum = a + b + c;

// var average = sum / 3;

// console.log("Sum:", sum);
// console.log("Average:", average);

// ***********************************************

// *********        Question 02         *********

// var x = 5;
// var y = 10;

// console.log(`Before swapping x is ${x} & y is ${y}`);

// var a = x;
// x = y;
// y = a;

// console.log(`After swapping x is ${x} & y is ${y}`);

// Challenge:
// Explain why the order of assignments matters when swapping two variables.

// Answer: 
// Because from the order we understand the positions of the variables
// value we stored in the it and from that the we swap the values  

// Correct Answer :- 
//  The order of assignments matters because we must save the original value 
// of one variable before overwriting it. The temporary variable stores that 
// value so we can assign it to the other variable.

// Bonus Challenge:
// Can you swap the values of x and y without using a third temporary variable?

// Answer:- 

// var x = 5;
// var y = 10;

// console.log(`Before swapping x is ${x} & y is ${y}`);

// x += y;
// y = x - y;
// x -= y

// console.log(`After swapping x is ${x} & y is ${y}`);


// ******  OR ************

// Destructuring     

// [x , y] = [y , x]

// console.log(x, y);


// ***********************************************


// *********        Question 03        *********


// let a = "10";
// let b = 5;

// console.log(a + b);  // Output is :- 105
// console.log(a - b);  // Output is :- 5
// console.log(a * b);  // Output is :- 50
// console.log(a / b);  // Output is :- 2

// // The plus operator the behaves like the string means when one side is the string
// // and anothe side is number then both convert it in string that process known as 
// // concatination 


// console.log("5" + 2 + 3);  

// // "5" + 2 = "52"
// //  "52" + 3 ="523"
// // output is : "523"  

// console.log(5 + 2 + "3");  

// // 5 + 2 = 7
// // 7 + "3" = "73"
// // output is : "73" 

// console.log("10" - "2" + "1"); 

// // "10" - "2" = 8
// // 8 + "1" = "81"
// // output is :  "81"

// console.log("6" / "2" + 1);  
// // "6" / "2" = 3
// // 3 + 1 = 4
// // output is : 4



// ***********************************************
// *********        Question 04        *********


// console.log(Boolean(0));  // Output is :- False
// console.log(Boolean("0"));  // Output is :- True
// console.log(Boolean(""));  // Output is :- False
// console.log(Boolean("false"));  // Output is :- True
// console.log(Boolean(null)); // // Output is :- False
// console.log(Boolean([]));  // Output is :- True
// console.log(Boolean({}));  // Output is :- True


// 3. Explain why "0" and 0 behave differently. 
// "0" means it is a string and it is truthy value and 0 is standardly is a falsy value

// 4. Explain why an empty array [] and an empty object {} are truthy in JavaScript.
// Because Empty arrays and empty objects are truthy because JavaScript treats all objects as truthy, including empty ones.


// console.log(Boolean(" "));  

// Because it is empty string ans it is falsy value
// Output is :- False

// console.log(Boolean("0" - 0)); 

// When we perform the coersion in ("0"-0) it form 0 and 0 is falsey value
// Output is :- False

// console.log(Boolean("false" === false));

// It get false because we assign the === which we assign the false for the 
// string means it gets false     

// console.log(Boolean(" "));

// in this the empty space is given in double quote and it makes string so it is truthy
// Output is :- True

// console.log([] == false);

// in double quote the type is not check so the empty array convert into the 
// empty string so it is falsy value so it indicate the 0 and the false is also
// the falsy value so it indicate 0 hence both are 0 equals to 0 so it true 
// Output is :- True

// console.log([] === false);

// here the empty arrray is truthy value and false is falsy so true === false 
// which make the opposite so it gets falsy 
// Output is :- False


// ***********************************************
// *********        Question 05        *********

// let a = 10;

// let b = "10";

// console.log(a == b);  // Output is :- True
// console.log(a === b);  // Output is :- False
// console.log(a != b);  // Output is :-  False
// console.log(a !== b);  // Output is :- True
// console.log(a > 5);  // Output is :- True
// console.log(b >= 10);  // Output is :- True


//2. Explain the difference between == and ===.
// The difference is the == did't check the data type and === check the data type
// this is the major difference in both


// 3. Explain the difference between != and !==.
// Same here the != not check the data type of the both side and the !== check the 
// data type of the both side


// 4. Explain why b >= 10 can return true even though b is a string.
// Because the if b is string value but it looks like the 10 so there the >= greater 
// than equal to sign is so here the if both are lookingly same so it becomes true and 
// here also "10" is equal to the 10 so it becomes the true  


// console.log("20" > "100");
//  When both operands are strings, JavaScript compares them lexicographically (character by character), not numerically.
// - First characters: "2" versus "1".
// - Since "2" comes after "1", "20" is considered greater than "100".


// console.log("20" > 100); // Output is :- False
// Because in this the string value treat as the number so 20 is not greater than 
// 100 so it is false 

// console.log(null == undefined); // Output is :- True
// In this question the both side have the falsy values so the false == false so it 
// output is True


// ***********************************************
// *********        Question 06        *********

// let num = 17;
// let remender = num % 5;
// console.log(`Remender: ${remender}`);

// if (num % 2 === 0) {
//     console.log(`${num} is even`)
// } else{
//     console.log(`${num} is odd`)
// }

// Challenge
// Explain why num % 2 === 0 can be used to check whether an integer is even.
// Because for when we mod and if the reminder is made 0 then that number is even number 
// and any other reminder is form rather than the 0 then that number is odd number 
// means the number is completily divisble (remender is 0))by the given number knows even number 
// and others number are known as odd number

// ***********************************************
// *********        Question 07        *********

// let marks = 42;
// let attendance = 80;

// if (marks >= 35 && attendance >= 75) {
//     console.log("Student passed");
// } else {
//     console.log("Student failed");
// }

// Challenge
// Before coding, predict what happens if:
// marks = 42;
// attendance = 60;

// Would the student pass or fail? Explain why.

// Output will be :- Student failed 
// Because the student attendance is not 75 or more than it 

// ***********************************************
// *********        Question 08        *********

// let marks = 92;
// let attendance = 80;

// if(marks >= 90 || attendance >= 95) {
//     console.log("Scholarship eligible");
// } else {
//     console.log("Not eligible");
// }

// Challenge
// Predict the output for each case:
// Marks	Attendance    Output
// 85	     96 --------> Eligible (because it has attendance greater than 95)          
// 85	     80 --------> Not Eligible (because the marks is less than 90 and attendance is less than 95)
// 95	     96 --------> Eigible (Both marks and attendance are greater than requirements)
// Explain why each student is or isn't eligible.


// ***********************************************
// *********        Question 09        *********

// let isBlocked = false;

// if (!isBlocked) {
//    console.log("Access granted");
// } else {
//    console.log("Access denied");
// }

// Challenge
// Predict the output in both cases:
// let isBlocked = true; 
// Output is "Access denied"
// and
// let isBlocked = false;
// Output is "Access granted"
// Explain how ! changes the Boolean value.
// The "!" perform the oppositre of the bollean values means if the isBloced is true
// then !isblocked is the false lie vice versa for the false become the true.

// ***********************************************
// *********        Question 10        *********

// let isLoggedIn = true;
// let isAdmin = false;
// let isApproved = true;

// if (isLoggedIn && (isAdmin || isApproved)) {
//         console.log("Access granted");
// } else {
//     console.log("Access denied");
// }

// Challenge
// Predict the output for each case:
//      Logged in	Admin	Approved
//      true	    false	false --------> Access denied because the user is not administrator and not approved user
//      false	    true	true  --------> Access denied because the user is not logged in 
//      true	    true	false --------> Access granted because the user is the logged in and also the user is admin.
// Explain why each user gets access or is denied.


// ***********************************************

// *********        Question 11        *********

// let marks = 60;

// if(marks >= 90 && marks <= 100){
//     console.log("Grade :- A")
// } else if(marks >= 80 && marks <= 89) {
//     console.log("Grade :- B")
// } else if(marks >= 70 && marks <= 79) {
//     console.log("Grade :- C")
// } else if(marks >= 60 && marks <= 69) {
//     console.log("Grade :- D")
// } else if(marks < 60 && marks >= 0) {
//     console.log("Grade :- F")
// } else {
//     console.log("Invalid input")
// }


// Predict the grade for each value without running your code:
// - marks = 90  -----> Grade: A
// - marks = 80  -----> Grade: B
// - marks = 60  -----> Grade: D
// - marks = 59  -----> Grade: F
// Explain how the order of your conditions affects the result.
// If the conditions are unordered then the grade system is disturbed the grades are 
// are posioning to wrong marks the grades are getting unstructured.


// ***********************************************
// *********        Question 12        *********

// let a = 40;
// let b = 25;
// let c = 40;

// if (a > b && a > c) {
//     console.log(`Largest number: ${a}`)
// } else if (b > a && b > c) {
//     console.log(`Largest number: ${b}`)
// } else if (c > a && c > b) {
//     console.log(`Largest number: ${c}`)
// } else if (a == b && b == c) {
//     console.log(`Largest number: ${a}`)
// } else if (a == b && c < a || a == c && b < a) {
//     console.log(`Largest number: ${a}`)
// } else if (b == c && a < b ) {
//     console.log(`Largest number: ${b}`)
// } else {
//     console.log("Invalid number")
// }

// Challenge:
// Try these test cases:
// - a = 10, b = 20, c = 30  -----> 30
// - a = 50, b = 50, c = 20  -----> 50 
// - a = 15, b = 15, c = 15  -----> 15

// Your challenge
// Before I mark Q012 as passed, test the simpler version with these values:
// a	b	c	Expected output
// 10	20	30	30
// 50	50	20	50      
// 15	15	15	15
// 40	25	40	40


// ***********************************************
// *********        Question 13        *********

// let year = 2000;

// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a leap year`)
// } else {
//     console.log(`${year} is not a leap year`)
// }


// ***********************************************
// *********        Question 14        *********

// let num = -0.5;

// if(num < 0) {
//     console.log(`${num} is negative number`)
// } else if (num === 0) {
//     console.log(`${num} is zero`)
// } else if (num > 0) {
//     console.log(`${num} is positive number`)
// } else{
//     console.log("Invalid Number")
// }


// ***********************************************
// *********        Question 15        *********

// let num = -7;

// if(num % 2 === 0){
//     console.log(`${num} is Even`)
// } else{
//     console.log(`${num} is Odd`)
// }


// ***********************************************
// *********        Question 16        *********

// let a = 15;
// let b = 15;

// let result = a === b ? "Both are equal" : a > b ? `${a} is largest` : `${b} is largest`;
// console.log(result);



// ***********************************************
// *********        Question 17        *********

let num = 8;

switch (num) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Invalid day number")
        break;
}

// ***********************************************
// *********        Question 10        *********



// ***********************************************
// *********        Question 10        *********



// ***********************************************
// *********        Question 10        *********



// ***********************************************
// *********        Question 10        *********



// ***********************************************
// *********        Question 10        *********



// ***********************************************