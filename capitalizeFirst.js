function capitalizeFirst(words, index) {
  if (index === undefined) {
    return capitalizeFirst(words, words.length - 1);
  } else if (index < 0) {
    return words;
  } else {
    const firstLetter = words[index].charAt(0);
    words[index] = words[index].replace(firstLetter, firstLetter.toUpperCase());
    return capitalizeFirst(words, index - 1);
  }
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
