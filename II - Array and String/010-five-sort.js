// Write a function 'fiveSort' that takes
// in an array of numbers as an argument.
// The function should rearrange elements
// of the array such that all 5s appear at the end.
// Your function should perform this operation in-place
// by mutating the original array.
//
// Elements that are not 5 can appear in
// any order in the output, as long as
// all 5s are at the end of the array.

const fiveSort = (numbers) => {
  let pointer1 = 0;
  let pointer2 = numbers.length - 1;
  while (pointer1 <= pointer2) {
    if (numbers[pointer2] === 5) {
      pointer2--;
    } else if (numbers[pointer1] === 5) {
      [numbers[pointer1], numbers[pointer2]] = [
        numbers[pointer2],
        numbers[pointer1],
      ];
      pointer1++;
    } else {
      pointer1++;
    }
  }

  return numbers;
};

console.log(fiveSort([12, 5, 1, 5, 12, 7])); // [12,7,1,12,5,5]
