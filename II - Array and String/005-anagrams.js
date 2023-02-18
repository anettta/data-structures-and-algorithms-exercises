// Write a function 'anagrams' that takes in two strings as arguments.
// The function should return a boolean indicating whether or not the strings are anagrams.
// Anagrams are strings that contain the same characters,
// but in any order.

// Time: O(n+m)
// Space: ~O(n+m)
// n = s1 length
// m = s2 length

const anagrams = (str1, str2) => {
  let obj1 = {};
  // let obj2 = {};
  for (let char of str1) {
    if (char in obj1) {
      obj1[char]++;
    } else {
      obj1[char] = 1;
    }
  }
  for (let char of str2) {
    if (char in obj1) {
      obj1[char]--;
    } else {
      return false;
    }
  }
  // for (let char of str2) {
  //   if (char in obj2) {
  //     obj2[char]++;
  //   } else {
  //     obj2[char] = 1;
  //   }
  // }

  for (let keys in obj1) {
    if (obj1[keys] !== 0) {
      return false;
    }
  }
  // for (let keys in obj1) {
  //   if (obj1[keys] !== obj2[keys]) {
  //     return false;
  //   }
  // }
  return true;
};

console.log(anagrams("restfulll", "flluster")); // false
console.log(anagrams("catss", "tacss")); // true
