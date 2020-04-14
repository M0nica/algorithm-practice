// Given a string, find the first non - repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let letterCount = {};
  let firstUnique = { seen: false, value: null };
  const sArray = s.split("");

  if (s.length == 0) {
    return -1;
  }

  for (let char of sArray) {
    if (letterCount[char]) {
      letterCount[char] = letterCount[char] + 1;
    } else {
      letterCount[char] = 1;
    }
  }

  for (let letter in sArray) {
    if (letterCount[sArray[letter]] == 1) {
      return letter;
    }
  }

  return -1;
};

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("")); // -1
console.log(firstUniqChar("aa")); // -1
