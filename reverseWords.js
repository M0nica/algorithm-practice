function reverseWords(message) {
  message = message.join("").split(" ");

  let start = 0;
  let end = message.length - 1;

  while (start < end) {
    let temp = message[start];

    message[start] = message[end];
    message[end] = temp;
    start++;
    end--;
  }

  return message;
}

const message = [
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l"
];

console.log(reverseWords(message)); // Prints: ['steal', 'pound', 'cake']
console.log(reverseWords("thief cake".split("")));
