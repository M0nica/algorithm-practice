// can also convert string to array -> Set -> array
// in order to solve in one-line

function removeDuplicates(str) {
  let words = str.split(" ");
  let uniqueWords = {};

  for (word of words) {
    uniqueWords[word] = true;
  }

  return words
    .reduce((acc, word) => {
      if (uniqueWords[word]) {
        acc.push(word);
        uniqueWords[word] = false;
      }
      return acc;
    }, [])
    .join(" ");
}

const str = "this is is a test string";
console.log(removeDuplicates(str));
