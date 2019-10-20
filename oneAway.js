// One Away: There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.Given two
// strings, write a function to check if they are one edit(or zero edits) away.

function oneAway(first, second) {
  if (first.length - second.length > 1) {
    console.log("false");
    return false;
  }

  const firstArray = first.split("");
  const secondArray = second.split("");

  if (firstArray.length > secondArray.length) {
    console.log("first string is longer than second string");
    var j;
    for (j = 0; j < firstArray.length - 1; j++) {
      if (
        firstArray[j] != secondArray[j] &&
        firstArray[j] != secondArray[j + 1]
      ) {
        firstArray.splice(j, 1);

        console.log(firstArray.join("") == secondArray.join(""));
        return firstArray.join("") == secondArray.join("");
      }
    }
  } else if (secondArray.length > firstArray.length) {
    var k;
    for (k = 0; k < secondArray.length - 1; k++) {
      if (
        secondArray[k] != firstArray[k] &&
        secondArray[k] != firstArray[k + 1]
      ) {
        secondArray.splice(k, 1);
        console.log(firstArray.join("") == secondArray.join(""));
        return firstArray.join("") == secondArray.join("");
      }
    }
  } else if (first.length == second.length) {
    console.log("first string is the same length as second string");

    var i;
    for (i = 0; i < firstArray.length - 1; i++) {
      if (firstArray[i] != secondArray[i]) {
        firstArray[i] = secondArray[i];
        console.log(firstArray.join("") == secondArray.join(""));
        return firstArray.join("") == secondArray.join("");
      }
    }
  }

  console.log(firstArray.join("") == secondArray.join(""));
  return firstArray.join("") == secondArray.join("");
}

oneAway("pale", "ple");
oneAway("pales", "pale");
oneAway("pale", "bale");
oneAway("pale", "bake");
