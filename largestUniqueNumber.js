// 1133. Largest Unique Number
// Easy

// 68

// 6

// Add to List

// Share
// Given an array of integers A, return the largest integer that only occurs once.

// If no integer occurs once, return -1.

var largestUniqueNumber = function (A) {
  const frequencyMap = {};

  for (num of A) {
    frequencyMap[num] ? frequencyMap[num]++ : (frequencyMap[num] = 1);
  }

  let max = -1;

  for (let [key, value] of Object.entries(frequencyMap)) {
    if (value == 1 && Number.parseInt(key, 10) > Number.parseInt(max, 10)) {
      max = key;
    }
  }

  return max;
};

console.log(largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1])); // 8
console.log(
  largestUniqueNumber([
    397,
    513,
    784,
    485,
    253,
    360,
    924,
    37,
    97,
    624,
    743,
    203,
    406,
    77,
    23,
    123,
    748,
    309,
    230,
    669,
  ])
); //924
