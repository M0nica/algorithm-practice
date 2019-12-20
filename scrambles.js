// Group Anagrams: Write a method to sort an array of strings
// so that all the anagrams are next to each other.

// ['abc', 'frog', 'cba', 'grof']

// look to see if we have anagram (sorted version in dict already)
// if not then add this current item's index to dict

// then loop through dict to add all of the items in a sorted way

function groupAnagrams(words) {
  const wordTracker = new Map();
  for (index in words) {
    const sortedWord = words[index]
      .split("")
      .sort()
      .join();

    if (wordTracker.has(sortedWord)) {
      wordTracker.set(
        sortedWord,
        wordTracker.get(sortedWord).concat(words[index])
      );
    } else {
      wordTracker.set(sortedWord, new Array(words[index]));
    }
  }

  const sortedAnagrams = [];

  // is there a way to convert javascript map into an array automagically?
  wordTracker.forEach(word => sortedAnagrams.push(word));

  return sortedAnagrams;
}

console.log(groupAnagrams(["abc", "frog", "cba", "grof"]));
