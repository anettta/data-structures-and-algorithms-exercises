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
// 012345678910
// 2t3t34h111w
//   i
//   j
const uncompress = (s) => {
  let i = 0;
  let j = 0;
  let nums = "0123456789";
  let result = [];
  while (j < s.length) {
    if (nums.includes(s[j])) {
      // i=2, j=2
      j++; // j=t
    } else {
      let num = Number(s.slice(i, j)); // 2
      for (let count = 0; count < num; count++) {
        result.push(s[j]);
      }
      j++; //index 2
      i = j; // index 2
    }
  }

  return result.join("");
};

console.log(uncompress("2c3a1t")); // 'ccaaat
console.log(uncompress("11a1t2e"));
