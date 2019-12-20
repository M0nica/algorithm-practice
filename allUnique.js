// Is Unique: Implement an algorithm to determine if a string has all unique
// characters.What if you cannot use additional data structures ?

function isUniqueWord(word) {
  const letterMap = new Map();
  for (let letter of word) {
    if (letterMap.has(letter)) {
      return false;
    } else {
      letterMap.set(letter, 1);
    }
  }

  return true;
}

// not unique; 'hotpotato'
// look at each letter in word and add to hash map
// if letter already exists in map then return early

function isUnique(word) {
  const letterMap = new Map();
  for (letter of word) {
    if (letterMap.has(letter)) {
      return false;
    } else {
      letterMap.set(letter, 1);
    }
  }

  return true;
}

// console.log(isUnique("moonica"));
//console.log(isUnique("abc"));

function isUniqueTwo(word) {
  // sort letters in array - if the next item is the same letter than return false

  word.split("").sort((a, b) => a - b);
  let i;
  for (i = 0; i < word.length; i++) {
    if (word[i] == word[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isUniqueWord("moonica"));
console.log(isUniqueWord("monica"));
console.log(isUniqueWord("abc"));

console.log(isUniqueTwo("moonica"));
console.log(isUniqueTwo("abc"));
