const binarySearch = (nums, target) => {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (nums[mid] < target) {
      lo = mid + 1;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(binarySearch([2, 3, 6, 9], 6)); // 2
