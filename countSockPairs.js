// John works at a clothing store.He has a large pile of socks that he must pair by color for sale.Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are
// socks with colors.There is one pair of color and one of color.There are three odd socks left, one of each color.The number of pairs is

//     .

// Function Description

// Complete the sockMerchant function in the editor below.It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n, ar) {
  const sockCollection = new Map();
  let pairs = 0;
  for (var sock of ar) {
    if (sockCollection.has(sock)) {
      sockCollection.set(sock, sockCollection.get(sock) + 1);
      if (sockCollection.get(sock) % 2 == 0) {
        pairs++;
      }
    } else {
      sockCollection.set(sock, 1);
    }
  }

  return pairs;
}
