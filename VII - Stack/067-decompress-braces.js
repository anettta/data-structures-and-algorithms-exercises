const decompressBraces = (str) => {
  const numbers = "0123456789";
  const stack = [];

  for (let char of str) {
    if (numbers.includes(char)) {
      stack.push(Number(char));
    } else {
      if (char === "}") {
        let segment = "";
        while (typeof stack[stack.length - 1] !== "number") {
          const popped = stack.pop();
          segment = popped + segment;
        }
        const num = stack.pop();
        stack.push(repeat(segment, num));
      } else if (char !== "{") {
        stack.push(char);
      }
    }
  }
  return stack.join("");
};

const repeat = (char, num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += char;
  }
  return result;
};

// const decompressBraces = (str) => {
//   let stack = [];
//   const numberChars = "0123456789";

//   for (let char of str) {
//     if (numberChars.includes(char)) {
//       stack.push(Number(char));
//     } else {
//       if (char === "}") {
//         let segment = "";
//         while (typeof stack[stack.length - 1] !== "number") {
//           const popped = stack.pop();
//           segment = popped + segment;
//         }
//         const num = stack.pop();
//         stack.push(repeat(segment, num));
//       } else if (char !== "{") {
//         stack.push(char);
//       }
//     }
//   }
//   return stack.join("");
// };

// const repeat = (elem, num) => {
//   let result = "";
//   for (let i = 0; i < num; i++) {
//     result += elem;
//   }
//   return result;
// };
console.log(decompressBraces("3r9{u}")); // 3ruuuuuuuuu
