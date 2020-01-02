/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let words = paragraph.toLowerCase().split(/[ ,.!?';]+/);

  const wordCount = new Map();

  let mostCommon = { value: 0, word: "" };
  for (word of words) {
    if (banned.includes(word)) {
      // do nothing
    } else if (wordCount.get(word)) {
      wordCount.set(word, wordCount.get(word) + 1);
    } else {
      wordCount.set(word, 1);
    }

    if (wordCount.get(word) > mostCommon.value) {
      mostCommon = { value: wordCount.get(word), word };
    }
  }

  return mostCommon.word;
};

const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
const banned = ["hit"];

console.log(mostCommonWord(paragraph, banned)); // "ball"
console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));
