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
    this.length = 0;
    this.tail = null;
  }
}

first = new Node(12);
first.next = new Node(12);
console.log(first);
