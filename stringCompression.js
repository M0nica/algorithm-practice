// String Compression: Implement a method to perform basic string
// compression using the counts of repeated characters.For example,
// the string aabcccccaaa would become a2b1c5a3.If the "compressed"
// string would not become smaller than the original string, your method
// should return the original string.You can assume the string has only
// uppercase and lowercase letters(a - z).

function compression(string) {
  const letters = string.split("");
  const letterCountMap = new Map();

  for (letter of letters) {
    if (letterCountMap.has(letter)) {
      letterCountMap.set(letter, letterCountMap.get(letter) + 1);
    } else {
      letterCountMap.set(letter, 1);
    }
  }

  let compressedString = "";

  for (let [key, value] of letterCountMap) {
    compressedString = compressedString + key + value;
  }

  console.log(compressedString);

  return compressedString.length < string.length ? compressedString : string;
}

compression("aabcccccaaa");
