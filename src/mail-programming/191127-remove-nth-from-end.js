/*
* Linked List Data Structure
*
* */

export class Node { // eslint-disable-line
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.length += 1;
  }

  removeAt(pos) {
    if (pos > -1 && pos < this.length) {
      let currentNode = this.head;
      let index = 0;
      let prevNode = null;

      if (pos === 0) {
        this.head = currentNode.next;
      } else {
        while (index < pos) {
          prevNode = currentNode;
          currentNode = prevNode.next;
          index += 1;
        }

        prevNode.next = currentNode.next;
      }

      this.length -= 1;
      currentNode.next = null;

      return currentNode.data;
    }

    return null;
  }

  toString() {
    let str = '';
    let currentNode = this.head;

    while (currentNode) {
      str += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode) {
        str += '->';
      }
    }

    return str;
  }
}

export default function removeNthFromEnd(head, n) {
  let currentNode = head;
  let index = 1;
  let prevNode = null;
  let length = 1;

  while (currentNode.next) {
    prevNode = currentNode;
    currentNode = prevNode.next;
    length += 1;
  }

  currentNode = head;
  length += 1;

  if (length - n === 1) {
    head = currentNode.next;  // eslint-disable-line
  } else {
    while (index < length - n) {
      prevNode = currentNode;
      currentNode = prevNode.next;
      index += 1;
    }

    prevNode.next = currentNode.next;
  }

  currentNode.next = null;

  return head;
}
