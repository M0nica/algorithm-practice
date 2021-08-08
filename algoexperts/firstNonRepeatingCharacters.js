// return the index of first non-repeating character,
// if there are no non-repeating chartacter then return -1

// O(N) time complexity, O(1) space complexity since hash table
// size is limited to alphabet size in this problem
function firstNonRepeatingCharacter(string) {
  const letterCount = new Array(26);

  for (let index in string) {
    const currentCharCode = string.charCodeAt(index);
    letterCount[currentCharCode] = letterCount[currentCharCode]
      ? "multiple"
      : 1;
  }

  for (let index in string) {
    if (letterCount[string.charCodeAt(index)] == 1) return parseInt(index);
  }

  return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;

// all should return true if the fn is working as expected
console.log(firstNonRepeatingCharacter("abcdcaf") == 1);
console.log(firstNonRepeatingCharacter("faadabcbbebdf") == 6);
console.log(firstNonRepeatingCharacter("a") == 0);
console.log(firstNonRepeatingCharacter("abc") == 0);
console.log(firstNonRepeatingCharacter("ababac") == 5);
console.log(firstNonRepeatingCharacter("ababacc") == -1);
console.log(firstNonRepeatingCharacter("lmnopqldsafmnopqsa") == 7);
