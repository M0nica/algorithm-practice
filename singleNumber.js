// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// Given a non - empty array of integers, every element appears twice except for one.Find that single one.

//     Note:

// Your algorithm should have a linear runtime complexity.Could you implement it without using extra memory ?

//     Example 1:

// Input: [2, 2, 1]
// Output: 1

// Example 2:

// Input: [4, 1, 2, 1, 2]
// Output: 4

var singleNumber = function(nums) {
  let i = 0;

  nums.sort((a, b) => a - b);

  for (i; i < nums.length; i++) {
    if (nums[i - 1] != nums[i] && nums[i] != nums[i + 1]) {
      return nums[i];
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
