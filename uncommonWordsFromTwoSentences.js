/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 * source: LeetCode: https://leetcode.com/problems/uncommon-words-from-two-sentences/
 */

var addWordsToMap = function(map, sentence) {
  const words = sentence.split(" ");
  for (word of words) {
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      map.set(word, map.get(word) + 1);
    }
  }
};

var uncommonFromSentences = function(A, B) {
  const seenWords = new Map();

  addWordsToMap(seenWords, A);
  addWordsToMap(seenWords, B);

  const uniqueWords = [];

  seenWords.forEach((value, key) => {
    if (value === 1) {
      uniqueWords.push(key);
    }
  });

  return uniqueWords;
};

const A = "this apple is sweet";
const B = "this apple is sour";

console.log(uncommonFromSentences(A, B));
