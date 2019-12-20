// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//     Example:

// Given nums = [2, 7, 11, 15], target = 9,

//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {
  // add each num to a map with its index
  // for each one determine if its counterpart exists
  // ifso return those two numbers

  const numMap = new Map();

  for (index in nums) {
    const value = nums[index];
    const inverseNumber = target - value;

    if (numMap.has(value)) {
      numMap.set(value, numMap.get(value).concat(index));
    } else {
      numMap.set(value, [index]);
    }

    if (numMap.has(inverseNumber)) {
      if (
        (inverseNumber == value && numMap.get(value).length >= 2) ||
        inverseNumber != value
      ) {
        return [numMap.get(inverseNumber)[0], index];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // EXPECT to equal [O,1 ]]
console.log(twoSum([3, 3], 6));
