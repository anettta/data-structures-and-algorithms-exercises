const threeSum = (arr) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (!map[sum]) {
        map[sum] = [arr[i], arr[j]];
      }
    }
  }

  for (let num of arr) {
    let complement = 70 - num;

    if (complement in map) {
      let [num1, num2] = map[complement];
      return num * num1 * num2;
    }
    map[complement] = num;
  }
};

console.log(threeSum([10, 23, 45, 5, 20, 30, 40]));
