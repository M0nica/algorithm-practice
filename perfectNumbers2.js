/*

A perfect number is a positive integer that is equal to the sum of all its positive divisors except itself.
Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

Example:
Input: 6
Output: True
Explanation: 6 = 1 + 2 + 3

Example:
Input: 28
Output: True
Explanation: 28 = 1 +2 + 4 + 7 + 14

*/

// for each number, determine its divisors
// sum up the divisors
// return whether or not the divisors equal that number

function getDivisors(number) {
  let divisors = [];
  let i = 0;
  for (i; i < Math.sqrt(number); i++) {
    if (number % i == 0) {
      divisors.push(i);
      if (i != 1) {
        divisors.push(number / i);
      }
    }
  }

  return divisors;
}

function isPerfectNumber(number) {
  const divisors = getDivisors(number);
  //  without reduce
  //     let sumOfDivisors = 0;

  //     for (divisor of divisors) {
  //         sumOfDivisors = sumOfDivisors + divisor;
  //     }

  // with reduce
  const sumOfDivisors = divisors.reduce((total, current) => total + current, 0);
  return sumOfDivisors == number;
}

console.log(getDivisors(28));
console.log(isPerfectNumber(28));
