// findLongestSubstring with distinct characters
// set longest substring to 0;
// create map for letters;
// if same letter is encountered twice
// reset streak and letter count

// function findLongestSubstring(word) {
//   let longest = 0;
//   let seen = {};
//   let streak = 0;

//   for (let letter of word) {
//     if (!seen[letter]) {
//       seen[letter] = 1;
//       streak++;
//     } else {
//       seen = {};
//       if (streak > longest) {
//         longest = streak;
//       }
//       streak = 0;
//     }
//   }

//   return longest > streak ? longest : streak;
// }

console.log(findLongestSubstring("")); //0

console.log(findLongestSubstring("rithmschool")); //7

console.log(findLongestSubstring("thisisawesome")); //6
