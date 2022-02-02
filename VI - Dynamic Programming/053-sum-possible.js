// Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

// You may assume that the target amount is non-negative.

// amt = amount
// nums = length of numbers
//
// Time: O(amt*nums);
// Space: O(amt)
//

const sumPossible = (amount, nums, memo = {}) => {
  if (amount === 0) return true;
  if (amount < 0) return false;
  if (amount in memo) return memo[amount];

  for (let i = 0; i < nums.length; i++) {
    if (sumPossible(amount - nums[i], nums, memo) === true) {
      memo[amount] = true;
      return true;
    }
  }
  memo[amount] = false;
  return false;
};

// const sumPossible = (amt, nums, memo = {}) => {
//   if (amt === 0) return true;
//   if (amt < 0) return false;
//   if (amt in memo) return memo[amt];
//   for (let num of nums) {
//     if (sumPossible(amt - num, nums, memo)) {
//       memo[amt] = true;
//       return true;
//     }
//   }
//   memo[amt] = false;
//   return false;
// };
console.log(sumPossible(8, [5, 12, 4])); // -> true, 4 + 4
