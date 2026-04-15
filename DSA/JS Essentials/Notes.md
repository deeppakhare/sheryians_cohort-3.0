# **let, var, const**

    in these the "var" we get access of its before initialization and its output shows undefined

# The relatonship between **string** and **integer**
    1. **String**  +  **String** = **String**  (Concatination)
    2. **String**  +  **Integer** = **String**  (Concatination)
    3. **Integer**  +  **Integer** = **Integer**  (Arithematic)

# Type Coersion :-
    It means javascript automatically converts one data type into another when performing operations.

Ex.,
1. `console.log("5" + 1);` output is **51** (but in string)
2. `console.log("5" - 1);` output is **4** (It performs arithmetic) (but in integer)
3. `console.log("5" * 2);` output is **10** (It performs arithmetic) (but in integer)

# Taking user unput from Command Prompt :-
    to taking user input we have to use the JS library known as prompt-sync

    For installation run these command ` npm install prompt-sync `

Ex.,
1. `let prompt = require('prompt-sync')();`
2. `let age = prompt("Enter your age");`
3. `console.log(`Age is ${age}`);`
