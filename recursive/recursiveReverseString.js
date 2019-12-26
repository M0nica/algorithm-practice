function reverse(word, index) {
  if (!index) {
    return reverse(word, word.length - 1);
  } else if (index <= (word.length - 1) / 2) {
    return word;
  } else {
    let letters = word.split("");
    let startIndex = word.length - 1 - index;
    let temp = letters[index];
    letters[index] = letters[startIndex];
    letters[startIndex] = temp;

    return reverse(letters.join(""), index - 1);
  }
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'

//BROKEN AT THE MOMENT
