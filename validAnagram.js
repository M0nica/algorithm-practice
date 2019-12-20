function validAnagram(first, second) {
  if (first.length != second.length) {
    return false;
  }

  const frequencies = {};

  for (let letter of first) {
    frequencies[letter] = frequencies[letter] + 1 || 1;
  }

  for (let letter of second) {
    if (frequencies[letter]) {
      frequencies[letter] = frequencies[letter] - 1;
    } else {
      return false;
    }
  }

  return true;
  // takei n two words
  // add each lettr of word to an object
  //then check if each letter exists in same frequency in the second object.
  // add whatever parameters you deem necessary - good luck!
}
