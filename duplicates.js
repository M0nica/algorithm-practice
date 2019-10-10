// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures ?

function isUnique(word) {
  const letters = word.split("");
  const addedLetters = new Map();

  for (var letter of letters) {
    if (addedLetters.has(letter)) {
      return false;
    } else {
      addedLetters.set(letter, 1);
    }
  }
  return true;
}
