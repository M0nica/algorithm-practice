class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    // this.val = val;
    // this.next = null;
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  unshift(val) {
    // add node to the beginning of linked list
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      this.head.prev = newNode;
      newNode.next = currentHead;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();

console.log(list.unshift(1));
console.log(list.unshift(200));
