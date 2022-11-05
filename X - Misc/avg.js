const calcAvgs = (arr) => {
  const avgs = [];
  const p1 = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    let avg = (arr[p1] + arr[i]) / 2;

    avgs.push(avg);
  }

  return avgs.reverse();
};

const hundredNums = Array.from({ length: 100 }, (_, i) => i + 1);

console.log(calcAvgs(hundredNums));
