const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor (value) {
    this.head = null;
    this.tail = null;
    //this.length = 0;
  }

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let l = this.head;

    while (l.head) {
      l = l.head;
      l.next = l.head;
    }

    return l;
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const newElem = new Node(value);

    if (this.head) {
      this.tail.next = newElem;
      this.tail = newElem;
    } else {
      this.tail = newElem;
      this.head = newElem;
    }

    //this.length += 1;
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const current = this.head;
    this.head = this.head.next;

    //this.length -= 1;

    return current.value;
  }
}

module.exports = {
  Queue
};
