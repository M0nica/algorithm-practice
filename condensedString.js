/* 
  Write a function to compress a stringby counting the repeated characters.
  Example: `aabbbbccdeeffffddddd` -> `a2b4c2d1e2f4d5`
 */

// for each letter
// add the letter to my new string
// count the new occurences of it
// add the final count to my string

function compressString(string) {
  let i;
  let currentLetter = string[0];
  let compressedString = "";
  let currentCount = 0;

  // aaabb

  if (!string) {
    return "";
  }

  for (i = 0; i < string.length; i++) {
    // first time seeing this letter
    if (string[i] != currentLetter) {
      compressedString = compressedString + currentLetter + currentCount;
      currentLetter = string[i];
      currentCount = 1;
    } else {
      // not first time seeing letter

      currentCount++;
    }
  }

  return compressedString + currentLetter + currentCount;
}

console.log(compressString("aabbb"));
console.log(compressString("a"));
console.log(compressString(""));
console.log(compressString("ab"));
console.log(compressString("aabbbbccdeef"));
