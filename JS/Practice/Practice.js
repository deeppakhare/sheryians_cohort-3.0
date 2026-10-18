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


console.log(Boolean(0));  // Output is :- False
console.log(Boolean("0"));  // Output is :- True
console.log(Boolean(""));  // Output is :- False
console.log(Boolean("false"));  // Output is :- True
console.log(Boolean(null)); // // Output is :- False
console.log(Boolean([]));  // Output is :- True
console.log(Boolean({}));  // Output is :- True


// 3. Explain why "0" and 0 behave differently. 
// "0" means it is a string and it is truthy value and 0 is standardly is a falsy value

// 4. Explain why an empty array [] and an empty object {} are truthy in JavaScript.
// Because Empty arrays and empty objects are truthy because JavaScript treats all objects as truthy, including empty ones.


console.log(Boolean(" "));  

// Because it is empty string ans it is falsy value
// Output is :- False

console.log(Boolean("0" - 0)); 

// When we perform the coersion in ("0"-0) it form 0 and 0 is falsey value
// Output is :- False

console.log(Boolean("false" === false));

// It get false because we assign the === which we assign the false for the string means it gets false     

console.log(Boolean([] == false));

// I dont understand it 


// ***********************************************
// *********        Question 01        *********

// ***********************************************
// *********        Question 01        *********

// ***********************************************
