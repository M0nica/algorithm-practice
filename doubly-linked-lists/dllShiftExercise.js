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
  //remove the node at the beginning of linked list
  shift() {
    if (!this.head) return undefined;

    let removedNode = this.head;
    if (this.length == 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
      removedNode.prev = null;
    }

    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();
console.log(list.push(4));
console.log(list.push(4));
console.log(list.shift());
console.log(list);
