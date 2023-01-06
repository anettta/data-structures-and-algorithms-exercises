// Write a function 'fiveSort' that takes
// in an array of numbers as an argument.
// The function should rearrange elements
// of the array such that all 5s appear at the end.
// Your function should perform this operation in-place
// by mutating the original array.
//
// Elements that are not 5 can appear in
// any order in the output, as long as
// all 5s are at the end of the array.

const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    if (nums[i] !== 5) {
      i++;
    } else if (nums[j] === 5) {
      j--;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums;
};

console.log(fiveSort([12, 5, 1, 5, 12, 7])); // [12,7,1,12,5,5]
console.log(fiveSort([5, 5, 5, 5, 12, 7]));

console.log(fiveSort([5, 1, 5, 2, 12, 5]));
