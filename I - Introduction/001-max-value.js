// Write a function `maxValue`, that takes in array of numbers as an argument.
// The function should return the largest number in the array.
//
// Solve this without using any built-in array methods.
//
// You can assume that the array is non-empty

const maxValue = (nums) => {
  let max = -Infinity;
  for (let num of nums) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

// const maxValue = (nums) => {
//   let max = -Infinity;
//   for (num of nums) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// };

// const maxValue = (nums) => {
//   let max = -Infinity;
//   for (let num of nums) {
//     if (num > max) max = num;
//   }
//   return max;
// };

// 01/03/21

// const maxValue = (nums) => {
//   let max = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// };

// 12-16-21

// const maxValue = (nums) => {
//   let largest = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > largest) {
//       largest = nums[i];
//     }
//   }
//   return largest;
// };

// const maxValue = (nums) => {
//   let largest = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     if (num > largest) {
//       largest = num;
//     }
//   }
//   return largest;
// };

console.log(maxValue([5, 7, 8, 9])); // 9
console.log(maxValue([-1, -89, -22, -7])); // -1
