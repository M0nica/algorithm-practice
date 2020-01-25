function isPalindrome(word) {
  let endPointer = word.length - 1;
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[endPointer]) {
      return false;
    }
    endPointer--;
  }
  return true;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
