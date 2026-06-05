
// ISBN :- International Structured Nook Number

// let num = 9992158106;
let num = 8175257660;
let temp = num;
let count = 0;
while (temp > 0) {
    let digit = temp % 10;
    count++;
    temp = Math.floor(temp / 10);
}
// console.log(count);
let ans = 0; 
let place = 10;
if (count == 10) {
    while (temp > 0) {
        let digit = temp % 10;
        ans = ans + (digit * place);
        place--;
        num = Math.floor(num / 10);
    }
    if (ans % 11 == 0) {
        console.log("It is ISBN Number");

    } else {
        console.log("It is not ISBN");

    }


} else {
    console.log("It is not ISBN number");
}
