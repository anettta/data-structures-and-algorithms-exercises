// Write a function 'mostFrequentChar' that takes in a string as an argument.
// The function should return the most frequent character of the string.
// If there are ties, return the character that appears earlier in the string.
//
// You can assume that the input string is non-empty.
// Time: O(n)
// Space: O(n)

// 12-17-21

const mostFrequentChar = (str) => {
  let mostFrequent = null;
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // catts
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char] = count[char] + 1;
    }
  }
  for (let elem of str) {
    if (mostFrequent === null || count[elem] > count[mostFrequent]) {
      mostFrequent = elem;
    }
  }
  return mostFrequent;
};
// const mostFrequentChar = (str) => {
//   let count = {};
//   for (let letter of str) {
//     if (!count[letter]) {
//       count[letter] = 0;
//     }
//     count[letter] += 1; // immediately increment it
//   }

//   let mostFrequent = null;

//   for (let letter of str) {
//     if (mostFrequent === null || count[letter] > count[mostFrequent]) {
//       mostFrequent = letter;
//     }
//   }
//   return mostFrequent;
// };

console.log(mostFrequentChar("bookeeper")); // 'e'
