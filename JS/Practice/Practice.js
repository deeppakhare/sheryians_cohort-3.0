let a = [88, 50, 25, 10];
let sub = a.reduce(geeks);

function geeks(tot, num) {
    return tot - num;
}
console.log(sub);