// Write a function `uncompress` that takes in a string as an argument.
// The input string will be formatted into multiple groups according to the following pattern:
// <number><char> `2c` or `3a`
// The function should return an uncompressed version of the string
// where each `char` of a group is repeated `number` times consecutively.
// You may assume that the input string is well-formed according to the previously mentioned pattern.

// Two-pointer technique!
// n = number of groups
// m = max num found in any group
// Time: O(n*m)
// Space: O(n*m)

// 01/03/22

const uncompress = (str) => {
  // 122y
  // yyyyyyyyyyy...
  let i = 0;
  let j = 0;
  // let result = "";
  let result = [];
  let numbers = "0123456789";
  while (j < str.length) {
    if (numbers.includes(str[j])) {
      // includes is constant since numbers is a string with fixed length; doesn't scale
      j++;
    } else {
      let num = Number(str.slice(i, j));
      for (let i = 0; i < num; i++) {
        // result += str[j]; // O(n) because strings in JS are immutable; strings are copied over
        // this is why using an array is better
        // convert result to an array
        result.push(str[j]); // pushing character to the END of an array
      }
      j++;
      i = j;
    }
  }
  return result.join("");
};

// 12-16-21 II
// const uncompress = (str) => {
//   let uncompressed = [];
//   let numbers = "0123456789";
//   let i = 0;
//   let j = 0;
//   while (i < str.length) {
//     if (numbers.includes(str[j])) {
//       j++;
//     } else {
//       let number = Number(str.slice(i, j));
//       for (let i = 0; i < number; i++) {
//         uncompressed.push(str[j]);
//       }
//       j++;
//       i = j;
//     }
//   }
//   return uncompressed.join("");
// };

// 12-16-21

// const uncompress = (str) => {
//   let uncompressed = [];
//   let numbers = "0123456789";
//   // "2c3a1t"
//   // "ccaaat"
//   let i = 0; // start of the group '1t'
//   let j = 0; // end of the group '1t'
//   while (i < str.length) {
//     if (numbers.includes(str[j])) {
//       j++;
//     } else {
//       let number = Number(str.slice(i, j));

//       for (let k = 0; k < number; k++) {
//         uncompressed.push(str[j]);
//       }
//       j++;
//       i = j;
//     }
//   }

//   return uncompressed.join("");
// };

// const uncompress = (str) => {
//   let numbers = "0123456789";
//   let uncompressedString = [];
//   let i = 0;
//   let j = 0;

//   while (j < str.length) {
//     if (numbers.includes(str[j])) {
//       j++;
//     } else {
//       let num = Number(str.slice(i, j));
//       for (let count = 0; count < num; count++) {
//         uncompressedString.push(str[j]);
//       }
//       j++;
//       i = j;
//     }
//   }

//   return uncompressedString.join("");
// };

console.log(uncompress("2c3a1t")); // 'ccaaat
console.log(uncompress("11a1t2e"));
