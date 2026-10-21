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
// *********        Question 01        *********

// ***********************************************
// *********        Question 01        *********

// ***********************************************
// *********        Question 01        *********

// ***********************************************
