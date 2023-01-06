// Write a function 'pairSum' that takes in an array and
// a target sum as arguments.
// The function should return an array containing a pair
// of indices whose elements sum to the given target.
// The indices returned must be unique.
// Be sure to return the indices, not the elements themselves.
// There is quaranteed to be one such pair that sums to the target.

// Time: O(n)
// Space: O(n)

const pairSum = (arr, target) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (complement in obj) {
      return [obj[complement], i];
    }
    obj[arr[i]] = i;
  }
};

console.log(pairSum([3, 2, 5, 4, 1], 8)); // [0,2]
