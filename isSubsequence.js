function isSubsequence(substring, word) {
  let pointer = 0;

  for (let letter of word) {
    if (letter == substring[pointer]) {
      pointer++;
    }
    // else do nothing
  }

  return pointer == substring.length;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // true
