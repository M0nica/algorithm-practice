// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// Note:

// You must do this in -place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // let's look at every num
  // if num = 0
  // remove it and push it to the end of nums
  // once we have reached the end of non-zeros the iterations should stop
  // we determine that with `nums.length - 1 - zeroCount`

  let zeroCount = 0;
  for (let i = 0; i < nums.length - 1 - zeroCount; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
      zeroCount++;
      i--;
    }
  }
};
