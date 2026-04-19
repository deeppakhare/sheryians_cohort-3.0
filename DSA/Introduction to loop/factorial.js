// Find factorial of a number n
// 👉 (n! = n × (n-1) × ... × 1)

function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

// Example
console.log(factorial(5));