// Write a function 'compress' that takes in a string as an argument.
// The function should return a compressed version of the string
// where cosecutive occurances of the same characters are compressed into the number of occurances
// followed by the character.
// Single character occurences should not be changed.
// 'aaa' compresses to '3a'

const compress = (str) => {
  let compressed = [];
  let i = 0;
  let j = 0;
  while (j <= str.length) {
    if (str[j] === str[i]) {
      j++;
    } else {
      let num = j - i;
      if (num === 1) {
        compressed.push(str[i]);
      } else {
        compressed.push(num + str[i]);
      }
      i = j;
    }
  }
  return compressed.join("");
};

console.log(compress("ccaaatsss")); // '2c3a1t3s'
