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

// what are this numbers divisors
// sum up the divisors
// does that sum = the number
// if not return false
// if so return true

function getDivisors(number) {
  let i;
  let divisors = [];
  for (i = 1; i < number; i++) {
    if (number % i == 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

function isPerfectNumber(number) {
  const divisors = getDivisors(number);
  let sumOfDivisors = 0;

  for (divisor of divisors) {
    sumOfDivisors = sumOfDivisors + divisor;
  }

  return number == sumOfDivisors;
}

console.log(isPerfectNumber(495));
