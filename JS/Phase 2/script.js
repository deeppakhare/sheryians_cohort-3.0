// Types of Function

// Function declaration
function name(first) {
    // console.log("first name is ", first);
}
name("Deep");

// Function expression
let age = function (num) {
    // console.log("age is",num);
}
age(23);

// Fat Arrow Function
let num = (add) => {
    // console.log(add + add);
}
num(23);

// IIFE (Immediatly Invoked Function Expression)
(function(){
    // console.log("This is IIFEE"); 
})()

// Function Callback

function hero() {
    // console.log("main hoo");

}

function main(a) {
    // console.log("hero function");
    a();
}

main(hero)


// Higher order function

function footpath(){
    // console.log("foothpath");
}
function mainroad(cd){
    // console.log("main road");
    cd();
}

mainroad(footpath);

// main road is higher order function


//   for each
var arr = ['ajay', 'bittu', 'dabbu'];
arr.forEach(function(val,elem){
    // console.log(val,elem);
})


// Map 
var arr = [10,20,30,40]
var arr2 = arr.map((x) => {
    return x*x
})
// console.log(arr2);


//  filter

var arr = [5, -3,9, -2, 4,33,8]

var arr2 = arr.filter((elem) => {
    return elem > 0  
})
// console.log(arr2);

let marks = [56,33,90,51,88,93,15];

let marks2 = marks.filter((elem) => {
    return elem > 33
})
// console.log(marks2);


var names = ['aman', 'basundi', 'chintu', 'dev']
var names2 = names.filter((elem) => {
    return elem.includes('a');
})

// console.log(names2);

//  reduce

let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, n) => acc + n, 0);
// console.log(sum);   



//      Object

let obj = {
    name: 'Deep',
    num: 21 ,
    gender: 'Male',
    haveLicence: true
}

// console.log(obj);
// console.log(obj.name);

//  CRUD
// Create
obj.city = 'Buldhan'
// console.log(obj);
// read
// console.log(obj);
// update
obj.name = 'Nayan'
// console.log(obj);
// delete
delete obj.num;
// console.log(obj);



console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


