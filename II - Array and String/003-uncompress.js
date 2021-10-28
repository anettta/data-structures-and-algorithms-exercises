// Write a function `uncompress` that takes
// in a string as an argument.
// The input string will be formatted
// into multiple groups according to the following pattern:
// <number><char>
// `2c` or `3a`
// The function should return an uncompressed version of the string
// where each `char` of a group is
// repeated `number` times consecutively.
// You may assume that the input string is well-formed
// according to the previously mentioned pattern.

// Two-pointer technique!
// n = number of groups
// m = max num found in any group
// Time: O(n*m)
// Space: O(n*m)

const uncompress = (str) => {
  let numbers = "0123456789";
  let uncompressedString = [];
  let i = 0;
  let j = 0;

  while (j < str.length) {
    if (numbers.includes(str[j])) {
      j++;
    } else {
      let num = Number(str.slice(i, j));
      for (let count = 0; count < num; count++) {
        uncompressedString.push(str[j]);
      }
      j++;
      i = j;
    }
  }

  return uncompressedString.join("");
};

console.log(uncompress("2c3a1t")); // 'ccaaat
