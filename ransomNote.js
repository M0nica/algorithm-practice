// Ransom Note
// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

//     Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

// https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3318/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let ransomLetters = {};
  for (let letter of magazine) {
    ransomLetters[letter] = ransomLetters[letter]
      ? ransomLetters[letter] + 1
      : 1;
  }

  for (let letter of ransomNote) {
    if (ransomLetters[letter] && ransomLetters[letter] > 0) {
      ransomLetters[letter] = ransomLetters[letter] - 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("a", "b")); //false
console.log(canConstruct("aa", "ab")); //false
console.log(canConstruct("aa", "aab")); //true
