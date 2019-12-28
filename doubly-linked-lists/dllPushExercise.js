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
    //   this.next = null;
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  // accept a value
  // add node to the end of DoublyLinkedList
  // return the DoubleLinkedList
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return this;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();
console.log(list.push(2));
console.log(list.push(6));

// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor(val) {
//         this.val = val
//         this.next = null;
//     }
//     push() {
//     }

//}
