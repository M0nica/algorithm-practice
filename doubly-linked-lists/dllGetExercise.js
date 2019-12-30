class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
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
  get(index) {
    //find node at specified index
    //is the index valid?

    if (index > this.length || index < 0) return undefined;

    if (index === 0) {
      return this.head;
    }

    if (index === this.length - 1) {
      return this.tail;
    }

    let count;
    let node;
    if (index >= this.length / 2) {
      count = this.length - 1;
      node = this.tail;
      while (count !== index) {
        node = node.prev;
        count--;
      }
    }

    if (index < this.length / 2) {
      node = this.head;
      count = 0;

      while (count !== index) {
        node = node.next;
        count++;
      }
    }
    return node;
  }
}
