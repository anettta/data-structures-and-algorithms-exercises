// Write a function 'pairProduct' that takes in an array
// and a target product as arguments. The function should
// return an array containing a pair of indices whose
// elements multiply to the given target.
// The indices returned must be unique.
//
// Be sure to return the indices, not the elements themselves.
// There is guaranteed to be one such pair whose product is the target.

// 12-17-21

const pairProduct = (arr, target) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let complement = target / num;
    if (complement in map) {
      return [map[complement], i];
    }
    map[num] = i;
  }
};

// const pairProduct = (arr, target) => {
//   let map = {};
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     let complement = target / num;
//     if (map[complement]) {
//       return [map[complement], i];
//     }
//     map[num] = i;
//   }
// };

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // [1,3]
