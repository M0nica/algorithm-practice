function capitalizeWords(words) {
  // add whatever parameters you deem necessary - good luck!

  //  iterative solution
  //   for (word in words) {
  //     words[word] = words[word].toUpperCase();
  //   }
  //   return words;

  if (words.length == 1) {
    return words[0].toUpperCase();
  } else {
    let [firstWord, ...rest] = words;
    let formatted = firstWord.toUpperCase() + "," + capitalizeWords(rest);
    return formatted.split(",");
  }
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
