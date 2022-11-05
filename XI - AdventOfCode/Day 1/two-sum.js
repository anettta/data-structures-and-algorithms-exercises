const twoSum = (arr) => {
  let set = new Set();
  for (let num of arr) {
    let complement = 2022 - num;
    if (set.has(complement)) {
      return complement * num;
    }
    set.add(num);
  }
  return 0;
};

console.log(twoSum([1721, 979, 366, 299, 301, 675, 1456]));

//Time: O(n);
//Space: O(n);
