/*
  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:
  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```
  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html
    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```
*/

// YOUR CODE HERE

function letterCount(word) {
  let wordCount = {};

  word = word.replace(/[^\w]/g, "");

  for (letter of word) {
    letter = letter.toLowerCase();
    wordCount[letter] = wordCount[letter] + 1 || 1;
  }
  return wordCount;
}

function letterFrequency(word) {
  let count = letterCount(word);
  Object.keys(count).forEach(letter => {
    count[letter] = count[letter] / word.length;
  });
  return count;
}

// console.log(letterCount("Apple"));
// console.log(letterCount("Appfffle"));
// console.log(letterCount("apple"));
// console.log(letterCount("Monic@!"));
// console.log(letterFrequency("Apple"));
