let nStr = 60;
if (nStr == 0 || nStr == 1) return "Not prime factors.";
else {
  for (let i = 2; i <= nStr; i++) {
    while (nStr % i === 0) {
      console.log(i);
      nStr = Math.floor(nStr / i);
    }
  }
}
