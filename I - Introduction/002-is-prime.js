// Write a function `isPrime` that takes in a number as an argument.
// The function should return a boolean indicating whether or not the
// given number is prime.
//
// A prime number is a number that is only divisible by two distinct numbers:
// 1 and itself.
//
// For example, 7 is a prime because it is only divisible by 1 and 7.
// For example, 6 is not a prime because it is divisible by 1,2,3, and 6.
//
// You can assume that the input number is a positive integer.

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// 01/03/21

// const isPrime = (n) => {
//   if (n < 2) return false;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// 12-16-21
// const isPrime = (num) => {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const isPrime = (num) => {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

console.log(isPrime(2)); // true
console.log(isPrime(6)); // false
console.log(isPrime(1)); // false
