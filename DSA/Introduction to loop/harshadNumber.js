let num = 10;
let temp = num;
let sum = 0;
while (temp > 0) {
  let digit = temp % 10;
  sum += digit;
  temp = Math.floor(temp / 10);
}
if (num % sum == 0) {
  console.log("It is Harshah");
} else {
  console.log("Not Harshad");
}
