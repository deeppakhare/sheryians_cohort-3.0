let prompt = require("prompt-sync")();
console.log("Enter 1 for Area of Rectangle");
console.log("Enter 2 for Area of Square");
console.log("Enter 3 for Area of Circle");
console.log("Enter 4 for Area of Trangle");
console.log("Enter 5 for Area of Trapezoid"); // 1/2 (a+b)h
let n = Number(prompt("Enter Number:- "));

switch (n) {
    case 1:
        let length = Number(prompt("Enter length of Rectangle:- "));
        let breadth = Number(prompt("Enter breadth of Rectangle:- "));
        console.log("Area is:- " + length * breadth);
        break;

    case 2:
        let side = Number(prompt("Enter side of Square:- "));
        console.log("Area is:- " + side * side);
        break;    
    
    case 3:
        let radius = Number(prompt("Enter radius of Circle:- "));
        console.log("Area is:- " + (2 * Math.PI * radius).toFixed(2));
        break;    

    case 4:
        let base = Number(prompt("Enter base of Trangle:- "));
        let height = Number(prompt("Enter height of Trangle:- "));
        console.log("Area is:- " + (base * height)/ 2);
        break;
    
    case 5:
        let base1 = Number(prompt("Enter 1st base of Trapezoid:- "));
        let base2 = Number(prompt("Enter 2nd base of Trapezoid:- "));
        let h = Number(prompt("Enter height of Trapezoid:- "));
        console.log("Area is:- " + 0.5 * (base1 + base2) * h);
        break;

    default:
        console.log("Invalid Number");
        break;
}
