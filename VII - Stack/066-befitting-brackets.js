// white a function, befittingBrackets, that takes in a
// string as an argument.
// The function should return a boolean indicating
// whether or not the string contains correctly matched brackets.

const befittingBrackets = (str) => {
  let brackets = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  let stack = [];

  for (let char of str) {
    if (char in brackets) {
      stack.push(brackets[char]);
    } else if (stack[stack.length - 1] === char && stack.length > 0) {
      stack.pop();
    }
  }
  return stack.length === 0;
};

// const befittingBrackets = (str) => {
//   const brackets = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };
//   let stack = [];
//   for (let char of str) {
//     if (char in brackets) {
//       stack.push(brackets[char]);
//     } else {
//       if (stack.length > 0 && stack[stack.length - 1] === char) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   if (stack.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const befittingBrackets = (str) => {
//   let stack = [];
//   let brackets = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };
//   for (let element of str) {
//     if (element in brackets) {
//       stack.push(brackets[element]);
//     } else {
//       if (stack.length > 0 && stack[stack.length - 1] === element) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };

console.log(befittingBrackets("((}}[]")); // false
console.log(befittingBrackets("[]")); // true
