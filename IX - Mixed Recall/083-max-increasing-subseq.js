const maxIncreasingSubseq = (nums) => {
  
}







// const maxIncreasingSubseq = (nums, i = 0, prev = -Infinity, memo = {}) => {
//   const key = i + "," + prev;
//   if (key in memo) return memo[key];
//   if (i === nums.length) {
//     return 0;
//   }

//   let currentNum = nums[i];
//   let options = [];
//   let withoutCurrentNum = maxIncreasingSubseq(nums, i + 1, prev, memo);

//   options.push(withoutCurrentNum);

//   if (currentNum > prev) {
//     let withCurrentNum = 1 + maxIncreasingSubseq(nums, i + 1, currentNum, memo);
//     options.push(withCurrentNum);
//   }
//   memo[key] = Math.max(...options);
//   return memo[key];
// };

console.log(maxIncreasingSubseq([2, 4, 9, 5]));
