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
