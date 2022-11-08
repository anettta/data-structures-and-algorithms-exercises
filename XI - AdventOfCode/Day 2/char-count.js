// range  char  password
//
//  1-3    a:    abcde

const charCount = (string) => {
  let numValid = 0;
  for (let line of string) {
    console.log(line);
    let [min, max, char, password] = createObj(line);

    let count = charCountInPassword(char, password);
    if (min <= count && count >= max) {
      numValid++;
    }
  }
  return numValid;
};

const createObj = (line) => {
  let [rangeSeg, charSeg, password] = line.split(" ");
  //   console.log(rangeSeg);
  //   console.log(charSeg);
  //   console.log(passwordSeq);
  let [min, max] = rangeSeg.split("-").map(Number);
  //   console.log(min, max);
  let char = charSeg[0];

  //   console.log(min, max, char, password);
  return {
    min,
    max,
    char,
    password,
  };
};

const charCountInPassword = (target, str) => {
  let count = 0;
  for (let char of string) {
    if (char === target) {
      count++;
    }
  }
  return count;
};

// console.log(charCountInPassword("p", "popfds"));
// console.log(createObj("2-10 a: rtsaai"));
console.log(charCount("2-4 a: ugaf"));
