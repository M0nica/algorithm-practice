// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once.Return the maximum number of instances that can be formed.

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const letters = text.split("");
  const letterCount = {};
  for (letter of letters) {
    if (letterCount[letter]) {
      letterCount[letter] = letterCount[letter] + 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  let balloonsCount =
    Math.floor(
      Math.min(
        letterCount["b"] / 1,
        letterCount["a"] / 1,
        letterCount["l"] / 2,
        letterCount["o"] / 2,
        letterCount["n"] / 1
      )
    ) || 0;

  // let balloonsCount = 0;
  // let notFound = false;

  //   while (!notFound) {
  //     if (
  //       letterCount["b"] >= 1 &&
  //       letterCount["a"] >= 1 &&
  //       letterCount["l"] >= 2 &&
  //       letterCount["o"] >= 2 &&
  //       letterCount["n"] >= 1
  //     ) {
  //       letterCount["b"] = letterCount["b"] - 1;
  //       letterCount["a"] = letterCount["a"] - 1;
  //       letterCount["l"] = letterCount["l"] - 2;
  //       letterCount["o"] = letterCount["o"] - 2;
  //       letterCount["n"] = letterCount["n"] - 1;
  //       balloonsCount++;
  //     } else {
  //       notFound = true;
  //     }
  //   }

  //   return balloonsCount;
  return balloonsCount;
};

console.log(maxNumberOfBalloons("nlaebolko")); // 1

console.log(maxNumberOfBalloons("loonbalxballpoon")); //2

console.log(maxNumberOfBalloons("leetcode")); // 0

console.log(maxNumberOfBalloons("balon")); // 0
