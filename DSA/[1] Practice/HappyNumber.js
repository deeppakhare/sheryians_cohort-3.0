var isHappy = function(n) {
    const seen = new Set();
    
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }
    return n === 1;
};

function getNext(n) {
    let totalSum = 0;
    while (n > 0) {
        let d = n % 10;
        totalSum += d * d;
        n = Math.floor(n / 10);
    }
    return totalSum;
}