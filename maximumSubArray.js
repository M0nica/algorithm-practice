// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

//     Example:

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
//     Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.

// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3285/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let total = 0;
  let highestTotal = nums[0];

  for (num in nums) {
    if (nums[num] > nums[num] + total || num == 0) {
      total = nums[num];
    } else {
      total = nums[num] + total;
    }
    if (total > highestTotal) {
      highestTotal = total;
    }
  }
  return highestTotal;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
