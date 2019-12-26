console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false

function isPalindrome(word, index) {
  if (!index) {
    return isPalindrome(word, word.length - 1);
  } else if (index < (word.length - 1) / 2) {
    return true;
  } else {
    let oppositeIndex = word.length - 1 - index;
    if (word[oppositeIndex] == word[index]) {
      return isPalindrome(word, index - 1);
    } else {
      return false;
    }
  }
}
