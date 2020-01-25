// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1(where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  return getSquares(n) == 1;
};

var getSquares = function(number, seen = {}) {
  if (number in seen) {
    return false;
  } else if (number == 1) {
    return true;
  } else {
    let digits = number.toString().split("");
    let sum = 0;

    for (digit of digits) {
      sum += Math.pow(digit, 2);
    }

    seen[number] = "true";

    return getSquares(sum, seen);
  }
};

console.log(isHappy(19)); // true
