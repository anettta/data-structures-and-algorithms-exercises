// Write a function 'mostFrequentChar' that takes in a string as an argument.
// The function should return the most frequent character of the string.
// If there are ties, return the character that appears earlier in the string.
//
// You can assume that the input string is non-empty.
// Time: O(n)
// Space: O(n)

const mostFrequent = (str) => {
  let obj = {};

  for (let char of str) {
    if (char in obj) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  let mostFrequentChar = null;
  for (let char of str) {
    if (obj[char] > obj[mostFrequentChar] || mostFrequentChar === null) {
      mostFrequentChar = char;
    }
  }
  return mostFrequentChar;
};

console.log(mostFrequent("bookeepppppper")); // 'p'
