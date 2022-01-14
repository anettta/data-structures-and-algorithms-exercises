// write a function, pairedParentheses, that takes in
// a string as an argument.
// the function should return a boolean indicating whether
// or not the string has well-formed parentheses.

const pairedParentheses = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    } else {
      count--;
    }
  }
  return count === 0 ? true : false;
};

console.log(pairedParentheses("(())"));
console.log(pairedParentheses("((**)"));
