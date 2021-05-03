// This week’s question:
// Given a string s and a character c, return the number of occurrences of c in s.

// Example:
// $ numChars(‘oh heavens’, ‘h’)
// $ 2
// Source: Cassidoo https://buttondown.email/cassidoo/archive/if-you-want-to-look-good-in-front-of-thousands/

function numCharsReduce(word, letter) {
  return word.split("").reduce((acc, current) => {
    if (current == letter) acc++;
    return acc;
  }, 0);
}

function numChars(word, letter) {
  let count = 0;
  for (let character of word) {
    if (character === letter) {
      count++;
    }
  }

  return count;
}

console.log(numCharsReduce("oh heavens", "h"));
console.log(numChars("oh heavens", "h"));
