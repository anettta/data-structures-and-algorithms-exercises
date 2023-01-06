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

// ccaayykkk

const compress = (str) => {
  let i = 0;
  let j = 0;
  let result = [];
  while (j <= str.length) {
    if (str[i] === str[j]) {
      j++;
    } else {
      let num = j - i;
      if (num > 1) {
        result.push(num, str[i]);
      } else {
        result.push(str[i]);
      }
      i = j;
    }
  }
  return result.join("");
};

console.log(compress("ccaaatsss")); // '2c3at3s'
