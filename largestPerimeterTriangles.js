/**
 * @param {number[]} A
 * @return {number}
 * Source: LeetCode https://leetcode.com/problems/largest-perimeter-triangle/
 */

// . For a triangle with sides a, b and c, the perimeter P is defined as: P = a + b + c.
var largestPerimeter = function(A) {
  if (A.length < 3) {
    return 0;
  }

  A.sort((a, b) => b - a);

  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] < A[i + 1] + A[i + 2]) {
      // return the highest three numbers
      // that satisfy the a  + b > c rule
      return A[i] + A[i + 1] + A[i + 2];
    }
  }
  return 0;
};

console.log(largestPerimeter([3, 6, 2, 3]));
