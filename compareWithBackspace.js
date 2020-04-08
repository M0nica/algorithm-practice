// This week's question:
// Given two strings n and m, return true if they are equal when both are typed into empty text editors. The twist: # means a backspace character.
function processString(str) {
  return str
    .split("")
    .reduce((acc, letter) => {
      letter == "#" ? acc.pop() : acc.push(letter);
      return acc;
    }, [])
    .join("");
}
function compareWithBackspace(a, b) {
  return processString(a) == processString(b);
}
console.log(compareWithBackspace("a##c", "#a#c")); // true -both strings become "c"
console.log(compareWithBackspace("xy##", "z#w#")); // true - both strings become ""
