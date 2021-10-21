// Write a function `maxValue`, that takes in array of numbers
// as an argument. The function should return the largest
// number in the array.
//
// Solve this without using any built-in array methods.
//
// You can assume that the array is non-empty

const maxValue = (nums) => {
  let largest = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
};

console.log(maxValue([5, 7, 8, 9])); // 9
console.log(maxValue([-1, -89, -22, -7])); // -1
