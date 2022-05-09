// Write a function 'mostFrequentChar' that takes in a string as an argument.
// The function should return the most frequent character of the string.
// If there are ties, return the character that appears earlier in the string.
//
// You can assume that the input string is non-empty.
// Time: O(n)
// Space: O(n)

const mostFrequent = (str) => {
  let mostFrequentChar = null;

  let map = {};

  for (let char of str) {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
  }
  for (let char of str) {
    if (map[char] > map[mostFrequentChar] || mostFrequentChar === null) {
      mostFrequentChar = char;
    }
  }

  return mostFrequentChar;
};

// const mostFrequent = (str) => {
//   let map = {};
//   for (let char of str) {
//     if (!map[char]) {
//       map[char] = 0;
//     }
//     map[char]++;
//   }

//   let mostFrequentChar = null;
//   for (let char of str) {
//     if (map[char] > map[mostFrequentChar] || mostFrequentChar === null) {
//       mostFrequentChar = char;
//     }
//   }

//   return mostFrequentChar;
// };

// const mostFrequentChar = (str) => {
//   let map = {};

//   for (let char of str) {
//     if (!map[char]) {
//       map[char] = 0; // initialize at 0
//     }
//     map[char] += 1; // immmediately increment it.
//   }

//   let mostFrequent = null;
//   for (let char of str) {
//     if (mostFrequent === null || map[char] > map[mostFrequent]) {
//       mostFrequent = char;
//     }
//   }

//   return mostFrequent;
// };

// 01/03/22

// const mostFrequentChar = (str) => {
//   let count = {};
//   let freq = 0;
//   let most_frequent = str[0];
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (!count[char]) {
//       count[char] = 0;
//     }
//     count[char] += 1;
//   }

//   for (num in count) {
//     if (count[num] > freq) {
//       freq = count[num];
//       most_frequent = num;
//     }
//   }

//   return most_frequent;
// };

// 12-17-21

// const mostFrequentChar = (str) => {
//   let mostFrequent = null;
//   let count = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     // catts
//     if (!count[char]) {
//       count[char] = 1;
//     } else {
//       count[char] = count[char] + 1;
//     }
//   }
//   for (let elem of str) {
//     if (mostFrequent === null || count[elem] > count[mostFrequent]) {
//       mostFrequent = elem;
//     }
//   }
//   return mostFrequent;
// };
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

console.log(mostFrequent("bookeepppppper")); // 'p'
