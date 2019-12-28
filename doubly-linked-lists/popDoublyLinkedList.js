class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // create a new node with value passed into the function
    // if the head property === null
    // set the head and tail to be the newly created node

    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // the tail's next should equal newly added node
      this.tail.next = newNode;
      // the newly added node's previous value should equal the tail
      newNode.prev = this.tail;

      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // if no head return undefined
    // take current tail, store it in variable

    const oldTail = this.tail;
    // if length is 1 set head and tail to null
    // update tail to be the previous node
    // set the newTails.next to null
    // return the old tail

    // the list is empty
    if (!this.head) {
      return undefined;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      // this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    // return this;
    return oldTail;
  }
}

let list = new DoublyLinkedList();

console.log(list.push(4));
console.log(list.push("Hello"));
console.log(list.push(42));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
