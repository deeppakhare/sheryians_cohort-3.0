let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write("* ");
    // process.stdout.write(j + " ");
  }

  console.log();
}
