// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // for each item in array store it in an object - the key is the alphabetized version - value is an array
  // then iterate through object to only return keys

  let mappings = {};

  for (let string of strs) {
    let sortedString = string.split("").sort().join("");

    if (mappings[sortedString]) {
      mappings[sortedString].push(string);
    } else {
      mappings[sortedString] = [string];
    }
  }

  let anagrams = [];
  for (let [key, value] of Object.entries(mappings)) {
    anagrams.push(value);
  }

  return anagrams;
};

// Time Complexity: O(NK \log K)O(NKlogK), where NN is the length of strs, and KK is the maximum length of a string in strs. The outer loop has complexity O(N)O(N) as we iterate through each string. Then, we sort each string in O(K \log K)O(KlogK) time.

// Space Complexity: O(NK)O(NK), the total information content stored in ans.
