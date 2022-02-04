// write a function, pairedParentheses, that takes in
// a string as an argument.
// the function should return a boolean indicating whether
// or not the string has well-formed parentheses.

const pairedParentheses = (str) => {
  let count = 0;
  for (let char of str) {
    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;
    }
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(pairedParentheses("(())")); // true
console.log(pairedParentheses("((**)")); // false
