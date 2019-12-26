// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  //   traverse() {
  //     let current = this.head;
  //     while (current) {
  //       console.log(current.val);
  //       current = current.next;
  //     }
  //   }

  pop() {
    // 1, go to head
    // 2. keep going until next node == tail
    // 3. set next to null instead of tail
    // 4.  update tail to current node
    // 5. decrement length of linked list
    // 6. return value of node removed

    if (!this.head) return undefined;

    let current = this.head;
    while (current.next && current.next != this.tail) {
      current = current.next;
    }

    let removedNode = this.tail;

    current.next = null;
    this.tail = current;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return removedNode;
  }
}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("house");
list.push("hi");
list.push("hello, fresh");
list.push("goodbye");
// list.traverse();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
console.log(list);
