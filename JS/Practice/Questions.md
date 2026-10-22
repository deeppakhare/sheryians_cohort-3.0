// ==========================================
// Q001 — Variables and Operators
// Topic: JavaScript Fundamentals
// Subtopic: Variables, Arithmetic Operators
// Difficulty: Level 1 — Basic
// Status: In Progress
// ==========================================

/*
Problem Statement:
Create three variables named a, b, and c.
Assign them the values 10, 20, and 30, respectively.

Calculate their sum and average, and store
the results in variables named sum and average.

Requirements:
1. Use variables to store the numbers.
2. Calculate the sum using arithmetic operators.
3. Calculate the average using the sum.
4. Display both results using console.log().
5. Do not hardcode the final results.

Expected Output:
Sum: 60
Average: 20

Concepts Practiced:
- Variable declaration
- const and let
- Arithmetic operators (+ and /)
- Expressions
- console.log()

Challenge:
Explain why the sum is divided by 3 to calculate
the average.


******************************************************************************

// ==========================================
// Q002 — Swapping Two Variables
// Topic: JavaScript Fundamentals
// Subtopic: Variables, Assignment, Temporary Variables
// Difficulty: Level 2 — Basic to Intermediate
// Status: In Progress
// ==========================================

/*
Problem Statement:
Create two variables named x and y.
Assign the values 5 and 10 to them, respectively.

Swap their values so that x becomes 10
and y becomes 5.

Requirements:
1. Create two variables named x and y.
2. Store the initial values 5 and 10.
3. Display the values before swapping.
4. Swap the values using a third temporary variable.
5. Display the values after swapping.
6. Do not directly assign the final values to x and y.

Expected Output:
Before swapping:
x: 5
y: 10

After swapping:
x: 10
y: 5

Concepts Practiced:
- Variable declaration (let)
- Variable reassignment
- Assignment operator (=)
- Temporary variables
- Understanding execution order
- console.log()

Challenge:
Explain why the order of assignments matters
when swapping two variables.

Bonus Challenge:
Can you swap the values of x and y without
using a third temporary variable?


******************************************************************************

Q003 of 100 — Predict the Output
Stage 1
Topic: Type Conversion
Level 2 — Basic to Intermediate

Your task
Without running the code first, predict the output of this JavaScript program.
let a = "10";
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


Requirements
1. Write the exact output of all four console.log() statements.
2. Explain why the + operator behaves differently from the other operators.
3. Identify which operations perform type conversion and what type conversion occurs.
Concepts practiced
- Strings and numbers
- The + operator
- Arithmetic operators
- Implicit type conversion (type coercion)
- Understanding JavaScript output
Important: Try predicting the results before executing the code. The goal is to understand why JavaScript produces each result, not just memorize the output.


******************************************************************************

Q004 of 100 — Truthy and Falsy Values
Stage 1
Topic: Type Conversion
Level 2 — Basic to Intermediate

Your task
Predict the output of the following code without running it first.
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(Boolean("false"));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));


Requirements
1. Write the exact output of all seven statements.
2. Identify which values are truthy and which are falsy.
3. Explain why "0" and 0 behave differently.
4. Explain why an empty array [] and an empty object {} are truthy in JavaScript.
Concepts practiced
- Boolean conversion
- Truthy and falsy values
- Strings versus numbers
- Empty arrays and objects
- JavaScript type coercion
Your turn: Send your predicted output with your reasoning for each value. I'll review your understanding before we move on to Q005.


******************************************************************************


Q005 of 100 — Comparison Operators
Stage 1
Topic: Operators
Level 2 — Basic to Intermediate

Your task
Predict the output of each statement without running the code first.
let a = 10;

let b = "10";

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a > 5);
console.log(b >= 10);


Requirements
1. Write the exact output of all six statements.
2. Explain the difference between == and ===.
3. Explain the difference between != and !==.
4. Explain why b >= 10 can return true even though b is a string.
Concepts practiced
- Loose equality and strict equality
- Inequality operators
- Type coercion in comparisons
- Relational operators
Your turn: Send me your predicted output and explain your reasoning for each statement. We'll review Q005 before moving to Q006.


******************************************************************************

Q006 of 100 — The Modulo Operator
Stage 1
Topic: Arithmetic Operators
Level 2 — Basic to Intermediate

Your task
Write a JavaScript program that:
1. Declares a variable num with the value 17.
2. Uses the modulo operator (%) to find the remainder when num is divided by 5.
3. Prints the remainder.
4. Checks whether num is even or odd using the modulo operator and a conditional statement.
Expected output
Remainder: 2
17 is odd


Concepts practiced
- Arithmetic operators
- Modulo (%)
- if...else
- Remainders
- Even and odd numbers
Challenge
Explain why num % 2 === 0 can be used to check whether an integer is even.
Your turn: Solve Q006 in practice.js and send me your code with your explanation.


******************************************************************************

Q007 of 100 — Logical Operators
Stage 1
Topic: Operators
Level 2 — Basic to Intermediate

Your task
A student passes an exam only if their marks are at least 35 and their attendance is at least 75%.
Write a JavaScript program with these variables:
let marks = 42;
let attendance = 80;


Your program must:
1. Check whether the student passes using the logical && operator.
2. Print "Student passed" if both conditions are true.
3. Otherwise, print "Student failed".
Expected output
Student passed


Concepts practiced
- Comparison operators
- Logical AND (&&)
- Boolean expressions
- if...else
- Combining multiple conditions
Challenge
Before coding, predict what happens if:
marks = 42;
attendance = 60;


Would the student pass or fail? Explain why.


******************************************************************************

Q008 of 100 — Logical OR (||)
Stage 1
Topic: Logical Operators
Level 2 — Basic to Intermediate

Your task
A student receives a special scholarship if they satisfy at least one of these conditions:
- Marks are at least 90.
- Attendance is at least 95%.
Use the following variables:
let marks = 92;
let attendance = 80;


Write a program that:
1. Uses the logical OR (||) operator.
2. Prints "Scholarship eligible" if either condition is true.
3. Otherwise, prints "Not eligible".
Expected output
Scholarship eligible


Challenge
Predict the output for each case:
Marks	Attendance
85	96
85	80
95	96
Explain why each student is or isn't eligible.


******************************************************************************

Q009 of 100 — Logical NOT (!)
Stage 1
Topic: Logical Operators
Level 2 — Basic to Intermediate

Your task
A website allows access only to users who are not blocked.
Use these variables:
let isBlocked = false;


Write a program that:
1. Uses the logical NOT (!) operator in an if...else statement.
2. Prints "Access granted" if the user is not blocked.
3. Otherwise, prints "Access denied".
Expected output
Access granted


Challenge
Predict the output in both cases:
let isBlocked = true;
and
let isBlocked = false;
Explain how ! changes the Boolean value.

******************************************************************************

Q010 of 100 — Combining Logical Operators
Stage 1
Topic: Logical Operators
Level 3 — Intermediate

Your task
A user can enter a website if:
- They are logged in, and
- They are either an administrator or an approved user.
Use these variables:
let isLoggedIn = true;
let isAdmin = false;
let isApproved = true;


Write an if...else statement that prints:
Access granted


if the user meets the requirements; otherwise, print:
Access denied


Requirements
1. Use && and || in the condition.
2. Use parentheses to make the intended grouping clear.
3. Don't use nested if statements.
Challenge
Predict the output for each case:
Logged in	Admin	Approved
true	false	false
false	true	true
true	true	false
Explain why each user gets access or is denied.


******************************************************************************

Q011 of 100 — if...else if...else
Stage 2
Topic: Conditionals
Level 2 — Basic to Intermediate

Your task: Grade calculator
Write a JavaScript program that assigns a grade based on a student's marks.
Use this variable:
let marks = 76;


Apply these grading rules:
Marks	Grade
90–100	A
80–89	B
70–79	C
60–69	D
Below 60	F
Your program must print:
Grade: C


Requirements
1. Use if...else if...else.
2. Handle all five grade ranges.
3. Make sure each range has the correct boundary conditions.
4. Assume marks are between 0 and 100 for this question.
Challenge
Predict the grade for each value without running your code:
- marks = 90
- marks = 80
- marks = 60
- marks = 59
Explain how the order of your conditions affects the result.
Your turn: Solve Q011 in practice.js and send me your code with your challenge answers.


******************************************************************************

// ==========================================
// Q012 — Largest of Three Numbers
// Topic: Conditionals & Loops
// Subtopic: if...else if...else, Comparison Operators
// Difficulty: Level 1 — Basic
// Status: In Progress
// ==========================================

/*
Problem Statement:
Write a JavaScript program to find the largest
among three numbers.

Example:
let a = 25;
let b = 48;
let c = 36;

Expected Output:
Largest number: 48

Requirements:
1. Use if...else if...else.
2. Compare all three numbers correctly.
3. Handle cases where two or more numbers are equal.
4. Test your solution with different values.

Challenge:
Try these test cases:
- a = 10, b = 20, c = 30
- a = 50, b = 50, c = 20
- a = 15, b = 15, c = 15

Concepts Practiced:
- Comparison operators
- Logical operators
- Conditional statements
- Equality and boundary cases

My Learning Notes:
(To be completed after solving and reviewing.)
*/

******************************************************************************
******************************************************************************
******************************************************************************
******************************************************************************
