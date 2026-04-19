// Q. Find the sum of first n natural numbers.


function sumOfN(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

// Example
console.log(sumOfN(5));