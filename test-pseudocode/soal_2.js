function fibonacciNumber(count) {
  let fib = [0, 1];
  for (var f = 2; f < count; f++) {
    // fib[f] = fib[f - 1] + fib[f - 2];
    fib.push(fib[f - 1] + fib[f - 2]);
  }
  return fib;
}

const fibonacci = fibonacciNumber(20);

console.log(fibonacci);
