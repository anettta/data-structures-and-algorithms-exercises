// Write a function 'intersection' that takes in two arrays, a,b, as arguments.
// The function should return a new array containing elements that are in
// both of the two arrays.
//
// You may assume that each input array does not contain duplicate elements.
// Time O(n+m)
// Space O(n)

const intersection = (a, b) => {
  let set = new Set();
  let result = [];

  for (let num of b) {
    if (!set.has(num)) {
      set.add(num);
    }
  }

  for (let num of a) {
    if (set.has(num)) {
      result.push(num);
    }
  }
  return result;
};

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // [2,6]

// brute force O(n*m)
// includes method uses loop under the hood
// let newArr = [];

// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < b.length; j++) {
//     if (a[i] === b[j]) {
//       newArr.push(a[i]);
//     }
//   }
// }
