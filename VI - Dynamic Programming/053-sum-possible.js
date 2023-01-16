// Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

// You may assume that the target amount is non-negative.

// amt = amount
// nums = length of numbers
//
// Time: O(amt*nums);
// Space: O(amt)
//

const sumPossible = (amount, nums, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount < 0) return false;
  if (amount === 0) return true;

  for (let num of nums) {
    if (sumPossible(amount - num, nums, memo) === true) {
      memo[amount] = true;
      return true;
    }
  }
  memo[amount] = false;
  return false;
};

console.log(sumPossible(4, [1, 2, 3])); // -> true, 1+3
