const nestingScore = (str) => {
  let stack = [0];
  for (let char of str) {
    if (char === "[") {
      stack.push(0);
    } else {
      let popped = stack.pop();
      if (popped === 0) {
        stack[stack.length - 1] += 1;
      } else {
        stack[stack.length - 1] += popped * 2;
      }
    }
  }
  console.log(stack);
  return stack[0];
};

console.log(nestingScore("[[][][]][]")); // 7
