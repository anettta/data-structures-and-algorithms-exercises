const parentheticalPossibilities = (str) => {
  if (str === "") return [""];
  const allPossib = [];
  const { choices, remainder } = getChoices(str);
  for (let choice of choices) {
    const remaindPossib = parentheticalPossibilities(remainder);
    for (let possib of remaindPossib) {
      allPossib.push(choice + possib);
    }
  }
  return allPossib;
};

const getChoices = (str) => {
  if (str[0] === "(") {
    const endPoint = str.indexOf(")");
    const choices = str.slice(1, endPoint);
    const remainder = str.slice(endPoint + 1);
    return { choices, remainder };
  } else {
    const choices = [str[0]];
    const remainder = str.slice(1);
    return { choices, remainder };
  }
};

console.log(parentheticalPossibilities("ad(ob)cd(pmj)b"));

// n = string length
// m = max group size

// Time: ~O(m^n);
// Space: ~O(m^n);
