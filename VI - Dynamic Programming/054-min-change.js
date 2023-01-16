// Write a function minChange that takes in an amount and an array of coins.
// The function should return the minimum number of coins required to create the amount.
// You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.
//
// Time: O(amt*coins);
// Space: O(amt);
//

const minChange = (amount, coins) => {
  let result = _minChange(amount, coins);
  if (result === Infinity) {
    return -1;
  } else {
    return result;
  }
};

const _minChange = (amount, coins, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount < 0) return Infinity;
  if (amount === 0) return 0;
  let min = Infinity;

  for (let coin of coins) {
    let change = 1 + _minChange(amount - coin, coins, memo);
    if (change < min) {
      min = change;
    }
  }
  memo[amount] = min;
  return memo[amount];
};

console.log(minChange(8, [1, 5, 4, 12])); // -> 2, because 4+4 is the minimum coins possible)
