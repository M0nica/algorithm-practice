// Check Permutation: Given two strings, write a method to decide if one is a
// permutation of the other.

function isPermutation(first, second) {
  const firstSorted = first
    .split("")
    .sort()
    .join("")
    .toLowerCase();

  const secondSorted = second
    .split("")
    .sort()
    .join("")
    .toLowerCase();

  return firstSorted == secondSorted;
}

console.log(isPermutation("hot", "toh"));
console.log(isPermutation("applee", "apple"));

function ifPermutation(first, second) {
  letterMap = new Map();
  for (let letter in first) {
    if (letterMap.has(letter)) {
      letterMap.set(letter, letterMap.get(letter));
    } else {
      letterMap.set(letter, 1);
    }
  }

  
  const mismatchLetters = false;
  letterMap.forEach((value, key) =>   )


}
