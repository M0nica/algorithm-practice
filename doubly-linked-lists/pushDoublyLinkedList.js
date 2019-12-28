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
}

let list = new DoublyLinkedList();

console.log(list.push(4));
console.log(list.push("Hello"));
console.log(list.push(42));
