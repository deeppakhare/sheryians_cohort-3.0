var fib = function (n) {
  const memo = {};

  const helper = (x) => {
    if (x === 0) return 0;

    if (x === 1) return 1;

    if (memo[x]) return memo[x];

    memo[x] = helper(x - 1) + helper(x - 2);

    return memo[x];
  };

  return helper(n);
};
