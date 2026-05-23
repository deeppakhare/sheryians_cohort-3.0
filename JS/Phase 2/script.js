// Types of Function

// Function declaration
function name(first) {
    console.log("first name is ", first);
}
name("Deep");

// Function expression
let age = function (num) {
    console.log("age is",num);
}
age(23);

// Fat Arrow Function
let num = (add) => {
    console.log(add + add);
}
num(23);

// IIFE (Immediatly Invoked Function Expression)
(function(){
    console.log("This is IIFEE"); 
})()

// Function Callback

function hero() {
    console.log("main hoo");

}

function main(a) {
    console.log("hero function");
    a();
}

main(hero)


// Higher order function

function footpath(){
    console.log("foothpath");
}
function mainroad(cd){
    console.log("main road");
    cd();
}

mainroad(footpath);

// main road is higher order function