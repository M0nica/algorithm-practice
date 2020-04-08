/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// var middleNode = function (head) {
//   let current = head;
//   let length = 0;

//   while (current.next !== null) {
//     length++;
//     current = current.next;
//   }

//   let count = 0;
//   current = head;
//   const mid = Math.ceil(length / 2);
//   while (count < mid) {
//     count++;
//     current = current.next;
//   }
//   return current;
// };

var middleNode = function (head) {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
