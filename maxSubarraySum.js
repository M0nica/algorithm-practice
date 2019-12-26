function maxSubarraySum(array, targetLength) {
  // should take in array
  // find the sum of the of first x elements (x is targetLength)
  // then go thropugh rest to see if there is a higher sum
  //within the array for x elements

  if (!array || array.length < targetLength) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < targetLength; i++) {
    sum = sum + array[i];
  }

  let max = sum;
  let firstPointer = 0;
  let secondPointer = targetLength;

  while (secondPointer <= array.length - targetLength) {
    sum = sum - array[firstPointer] + array[secondPointer];

    if (sum > max) {
      max = sum;
    }

    secondPointer++;
    firstPointer++;
  }
  sum = sum - array[firstPointer] + array[secondPointer];
  return max > sum ? max : sum;
  u;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
console.log(maxSubarraySum([2, 3], 3)); // null

// function maxSubarraySum(array, length) {
//   // should take in array
//   // find the total of first x elements
//   // then go thropugh rest to see if there is a higher total

//   if (array.length < length) {
//     return null;
//   }

//   let max = -Infinity;
//   let sum = 0;
//   let lowest = 0;
//   let highest = length;

//   for (let i = 0; i < length; i++) {
//     sum = sum + array[i];
//   }

//   while (highest <= array.length - length) {
//     sum = sum - array[lowest] + array[highest];

//     if (sum > max) {
//       max = sum;
//     }

//     lowest++;
//     highest++;
//   }

//   sum = sum - array[lowest] + array[highest];

//   return sum > max ? sum : max;
// }

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
console.log(maxSubarraySum([2, 3], 3)); // null
