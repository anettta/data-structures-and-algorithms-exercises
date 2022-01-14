// Write a function 'compress' that takes in a string as an argument.
// The function should return a compressed version of the string
// where cosecutive occurances of the same characters are compressed into the number of occurances
// followed by the character.
// Single character occurences should not be changed.
// 'aaa' compresses to '3a'

// Time: O(n)
// Space: O(n)
// Strings in JS are immutable thus strings are copied over
// using array instead

// 01/03/22

const compress = (str) => {
  let i = 0;
  let j = 0;
  let compressed = [];
  while (j <= str.length) {
    if (str[j] !== str[i]) {
      let num = j - i;
      if (num === 1) {
        compressed.push(str[i]);
      } else {
        compressed.push(num, str[i]);
      }

      i = j;
      j++;
    } else {
      j++;
    }
  }
  return compressed.join("");
};

// 12-16-21
// const compress = (str) => {
//   let compressed = [];
//   //"cccatdd"
//   // 3cat2d
//   let i = 0; // start of the streak
//   let j = 0; // end of the streak

//   while (j <= str.length) {
//     if (str[i] === str[j]) {
//       j++;
//     } else {
//       let count = j - i;
//       if (count === 1) {
//         compressed.push(str[i]);
//       } else {
//         compressed.push(count);
//         compressed.push(str[i]);
//       }
//       i = j;
//     }
//   }

//   return compressed.join("");
// };

// const compress = (str) => {
//   let compressed = [];
//   let i = 0;
//   let j = 0;
//   while (j <= str.length) {
//     // O(n)
//     if (str[j] === str[i]) {
//       j++;
//     } else {
//       let num = j - i;
//       if (num === 1) {
//         compressed.push(str[i]);
//       } else {
//         compressed.push(num, str[i]);
//       }
//       i = j;
//     }
//   }
//   return compressed.join(""); // O(n)
// };

console.log(compress("ccaaatsss")); // '2c3at3s'
