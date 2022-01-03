// Write a function 'anagrams' that takes in two strings as arguments.
// The function should return a boolean indicating whether or not the strings are anagrams.
// Anagrams are strings that contain the same characters,
// but in any order.

// Time: O(n+m)
// Space: ~O(n+m)
// n = s1 length
// m = s2 length

// 12-17-21

// const anagrams = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
//   // cats // tacs // true
//   for (let i = 0; i < str1.length; i++) {
//     let str1Elem = str1[i];
//     if (!str2.includes(str1Elem)) {
//       return false;
//     }
//   }
//   return true;
// };

const anagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  // cats // tacs // true
  let map = {};
  for (let i = 0; i < str1.length; i++) {
    let str1Elem = str1[i];
    map[str1Elem] = true;
  }

  for (let i = 0; i < str2.length; i++) {
    let str2Elem = str2[i];
    if (!map[str2Elem]) {
      return false;
    }
  }
  return true;
};

// const anagrams = (s1, s2) => {
//   // if (s1.length !== s2.length) return false;
//   let map = {};

//   for (let letter of s1) {
//     // n
//     if (!map[letter]) {
//       map[letter] = 0;
//     }
//     map[letter] += 1;
//   }

//   for (let letter of s2) {
//     // m
//     if (map[letter]) {
//       map[letter] -= 1;
//     } else {
//       return false;
//     }
//   }
//   for (let letter in map) {
//     // n
//     // in = iterating through the keys of the object
//     if (map[letter] !== 0) {
//       return false;
//     }
//   }
//   return true;
// };

console.log(anagrams("restfull", "flluster")); // true
console.log(anagrams("cats", "tocs")); // false
