var maximumProduct = function(nums) {
  nums.sort((a, b) => 0 - b - (0 - a));

  const lowerProduct = nums
    .slice(0, 2)
    .concat(nums.slice(-1))
    .reduce((acc, val) => {
      return acc * val;
    }, 1);

  const upperProduct = nums.slice(-3).reduce((acc, val) => {
    return acc * val;
  }, 1);

  return lowerProduct > upperProduct ? lowerProduct : upperProduct;
};

console.log(maximumProduct([29, -10, 400, 100]));
console.log(maximumProduct([1, 2, 3, 4])); // 24
console.log(maximumProduct([1, 2, 3])); // 6
console.log(maximumProduct([-1, -2, 1, 2, 3])); //6
console.log(maximumProduct([1000, 1000, 2, 1, 2, 5, 3, 1]));
