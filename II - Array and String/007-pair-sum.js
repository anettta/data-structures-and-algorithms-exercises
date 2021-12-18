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
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    // map = [elem, i];
    let complement = target - elem;
    if (complement in map) {
      return [map[complement], i];
    }

    map[elem] = i;
  }
};

// const pairSum = (arr, target) => {
//   // brute force Time: O(n^2) and Space: O(1)
//   //   for (let i = 0; i < arr.length; i++) {
//   //     for (let j = i + 1; j < arr.length; j++) {
//   //       if (arr[i] + arr[j] === target) {
//   //         return [i, j];
//   //       }
//   //     }
//   //     return -1;
//   //   }
//   // Time: O(n)
//   // Space: O(n)

//   let map = {};
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     let complement = target - num;

//     // key in object
//     if (complement in map) {
//       //   console.log(map[complement], complement, i, arr[i]);
//       return [map[complement], i];
//     }
//     // num's index is i
//     map[num] = i;
//   }
// };

console.log(pairSum([3, 2, 5, 4, 1], 8)); // [0,2]
