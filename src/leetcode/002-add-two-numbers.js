/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export default function addTwoNumbers(list1, list2) {
  let l1 = list1;
  let l2 = list2;
  let node = new ListNode(0);
  const head = node;

  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + node.val;
    const interpolation = sum > 9 ? 1 : 0;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;

    node.val = sum % 10;

    if (l1 || l2 || interpolation) {
      node.next = new ListNode(interpolation);
      node = node.next;
    }
  }

  return head;
}
