// Write a function, maxPalinSubsequence, that takes in a string as an argument. The function should return the length of the longest subsequence of the string that is also a palindrome.

// A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

// n = length of the string
// Time: O(n^2)
// Space: O(n^2)
//
const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
  let key = i + "," + j;
  if (key in memo) return memo[key];
  if (i > j) return 0;
  if (i === j) return 1;

  if (str[i] === str[j]) {
    memo[key] = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);
  } else {
    memo[key] = Math.max(
      maxPalinSubsequence(str, i + 1, j, memo),
      maxPalinSubsequence(str, i, j - 1, memo)
    );
  }
  return memo[key];
  // if (i === j) return 1;
  // if (i > j) return 0;
  // let key = i + "," + j;
  // if (key in memo) return memo[key];
  // if (str[i] === str[j]) {
  //   memo[key] = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);
  // } else {
  //   memo[key] = Math.max(
  //     maxPalinSubsequence(str, i + 1, j, memo),
  //     maxPalinSubsequence(str, i, j - 1, memo)
  //   );
  // }
  // return memo[key];
};

console.log(maxPalinSubsequence("luwxult")); // -> 5
