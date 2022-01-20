// Write a function 'intersection' that takes in two arrays, a,b, as arguments.
// The function should return a new array containing elements that are in
// both of the two arrays.
//
// You may assume that each input array does not contain duplicate elements.
// Time O(n+m)
// Space O(n)

const intersection = (a, b) => {
  let set = new Set();
  let arr = [];
  for (let elem of a) {
    if (!set.has(elem)) {
      set.add(elem);
    }
  }
  for (let elem of b) {
    if (set.has(elem)) {
      arr.push(elem);
    }
  }
  return arr;
};

// 01/03/22

// const intersection = (a, b) => {
//   let newArr = [];
//   let map = {};
//   for (let i = 0; i < a.length; i++) {
//     let num = a[i];
//     map[num] = i;
//   }

//   for (let i = 0; i < b.length; i++) {
//     let num = b[i];
//     if (map[num]) {
//       newArr.push(num);
//     }
//   }

//   return newArr;
// };

// 12-18-21

// const intersection = (a, b) => {
//   let newArr = [];
//   for (let i = 0; i < a.length; i++) {
//     if (b.includes(a[i])) {
//       newArr.push(a[i]);
//     }
//   }
//   return newArr;
// };

// const intersection = (a, b) => {
//   let newArr = [];
//   let set = new Set();

//   for (let i = 0; i < b.length; i++) {
//     set.add(b[i]);
//   }
//   for (let i = 0; i < a.length; i++) {
//     if (set.has(a[i])) {
//       newArr.push(a[i]);
//     }
//   }

//   return newArr;
// };

// const intersection = (a, b) => {
//   let newArr = [];
//   let set = new Set();

//   for (let i = 0; i < a.length; i++) {
//     set.add(a[i]);
//   }
//   for (let i = 0; i < b.length; i++) {
//     if (set.has(b[i])) {
//       newArr.push(b[i]);
//     }
//   }

//   return newArr;
// };
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
