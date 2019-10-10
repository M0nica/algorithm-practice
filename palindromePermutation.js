/// Palindrome Permutation: Given a string, write a function to
/// check if it is a permutation of a palin - drome.A palindrome
///  is a word or phrase that is the same forwards and backwards.A
/// permutation is a rearrangement of letters.The palindrome does not
/// need to be limited to just dictionary words.

function checkPalindromPermutation(word) {
  const letters = word.split("");
  const mappedLetters = new Map();

  for (var letter of letters) {
    if (letter != "" && mappedLetters.has(letter)) {
      mappedLetters.set(letter, mappedLetters.get(letter) + 1);
    } else {
      mappedLetters.set(letter, 1);
    }
  }

  let odd = 0;

  for (var mappedLetter of mappedLetters) {
    if (letter != "" && mappedLetters.get(letter) % 2 != 0) {
      odd++;
    }

    if (odd > 1) {
      return false;
    }
  }

  return true;
}

checkPalindromPermutation("tot");
checkPalindromPermutation("car");
