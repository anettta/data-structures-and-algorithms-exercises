const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let leftSide = nums.slice(0, mid);
  let rightSide = nums.slice(mid);
  let mergedLeft = mergeSort(leftSide);
  let mergedRight = mergeSort(rightSide);
  return merge(mergedLeft, mergedRight);
};

const merge = (arr1, arr2) => {
  arr1.reverse();
  arr2.reverse();
  let merged = [];
  while (arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[arr1.length - 1] < arr2[arr2.length - 1]) {
      merged.push(arr1.pop());
    } else {
      merged.push(arr2.pop());
    }
  }
  merged.push(...arr1);
  merged.push(...arr2);

  return merged;
};

console.log(mergeSort([29, 45, 1, 3, 5, 50, 100])); // [1,3,5,29,45,50,100]
