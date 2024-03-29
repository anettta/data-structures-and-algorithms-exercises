// Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.

// The 0-th and 1-st numbers of the sequence are both 0.

// The 2-nd number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous three numbers.

// Solve this recursively.

// Time: O(n)
// Space: O(n)

const tribonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;
  memo[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  return memo[n];
};

console.log(tribonacci(0)); // -> 0

console.log(tribonacci(1)); // -> 0

console.log(tribonacci(2)); // -> 1

console.log(tribonacci(5)); // -> 4
