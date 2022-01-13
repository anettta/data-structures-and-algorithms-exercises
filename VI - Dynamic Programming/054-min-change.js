// Write a function minChange that takes in an amount and an array of coins.
// The function should return the minimum number of coins required to create the amount.
// You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.
//
// Time: O(amt*coins);
// Space: O(amt);
//

const minChange = (amount, coins) => {
  const answer = minimumChange(amount, coins);
  return answer === Infinity ? -1 : answer;
};

const minimumChange = (amount, coins, memo = {}) => {
  if (amount < 0) return Infinity;
  if (amount === 0) return 0;
  if (amount in memo) return memo[amount];

  let minCoins = Infinity;

  for (let coin of coins) {
    const numCoins = 1 + minimumChange(amount - coin, coins, memo);
    minCoins = Math.min(minCoins, numCoins);
  }

  return (memo[amount] = minCoins);
};

// const minChange = (amt, coins) => {
//   const answer = _minChange(amt, coins);
//   return answer === Infinity ? -1 : answer;
// };

// const _minChange = (amt, coins, memo = {}) => {
//   if (amt < 0) return Infinity;
//   if (amt === 0) return 0;
//   if (amt in memo) return memo[amt];
//   let min = Infinity;
//   for (let coin of coins) {
//     const numCoins = 1 + _minChange(amt - coin, coins, memo);
//     min = Math.min(numCoins, min);
//   }
//   return (memo[amt] = min);
// };

console.log(minChange(8, [1, 5, 4, 12])); // -> 2, because 4+4 is the minimum coins possible)
