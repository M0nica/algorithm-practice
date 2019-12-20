function hasPalindromePermutation(theString) {
  // Check if any permutation of the input is a palindrome
  const letterMap = new Map();

  for (letter of theString) {
    if (letterMap.has(letter)) {
      // this letter is the seconf of a pair so reset to 0
      letterMap.set(letter, 0);
    } else {
      // this letter is odd so set to 1
      letterMap.set(letter, 1);
    }
  }

  let oddLetterCount = 0;

  letterMap.forEach(letter => letter != 0 && oddLetterCount++);

  return oddLetterCount <= 1;
}
