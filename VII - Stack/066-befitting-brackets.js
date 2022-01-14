// white a function, befittingBrackets, that takes in a
// string as an argument.
// The function should return a boolean indicating
// whether or not the string contains correctly matched brackets.

const befittingBrackets = (str) => {
  let stack = [];
  let brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  // {{}}
  for (let element of str) {
    if (element in brackets) {
      stack.push(brackets[element]);
    } else {
      if (stack.length > 0 && element === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
};

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

console.log(befittingBrackets("((}}[]"));
console.log(befittingBrackets("[]"));
