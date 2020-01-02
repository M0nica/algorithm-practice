// A sentence S is given, composed of words separated by spaces.Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin"(a made - up language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

// If a word begins with a vowel(a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.

// If a word begins with a consonant(i.e.not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".

// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin.

function goatLatin(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];
  const words = sentence.split(" ");
  let newWords = [];
  for (word in words) {
    const letters = words[word].split("");
    if (vowels.includes(letters[0].toLowerCase())) {
      // do nothing
    } else {
      //swap first and lrngth + 1 (end of list/empty)
      [letters[0], letters[letters.length]] = [
        letters[letters.length],
        letters[0]
      ];
    }

    letters.push("m");
    letters.push("a");

    let count = 0;

    while (count <= word) {
      letters.push("a");
      count++;
    }

    newWords.push(letters.join(""));
  }

  return newWords.join(" ");
}

const firstSentence = "I speak Goat Latin";
console.log(goatLatin(firstSentence)); //"Imaa peaksmaaa oatGmaaaa atinLmaaaaa";

const secondSentence = "The quick brown fox jumped over the lazy dog";
console.log(goatLatin(secondSentence));
("heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa");
