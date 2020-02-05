export default function removeNthFromEnd(head, n) {
  let currentNode = head;
  let index = 1;
  let prevNode = null;
  let length = 1;

  while (currentNode.next) {
    currentNode = currentNode.next;
    length += 1;
  }

  currentNode = head;
  length += 1;

  if (length - n === 1) {
    head = currentNode.next;
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
