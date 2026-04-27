let num = 123;
let temp = num;
let temp2 = num;
let count = 0;

let armstrong = 0;
while(num > 0){
    let  digit = num % 10;
    count ++;
    num = Math.floor(num / 10);
    
}

while(temp > 0){
    let digit = temp % 10;
    armstrong = armstrong + Math.pow(digit, count);
    temp = Math.floor(temp / 10);
}

return armstrong == temp2 ? "Armstrong Number" : "Not Armstrong"
