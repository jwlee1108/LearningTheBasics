function ListNode(val) {
  this.val = val;
  this.next = null;
}

export default function mergeTwoLists(l1, l2) {
  let mergedList = new ListNode(-1);
  const head = mergedList;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      mergedList.next = l1;
      l1 = l1.next;
    } else {
      mergedList.next = l2;
      l2 = l2.next;
    }

    mergedList = mergedList.next;
  }

  if (l1) {
    mergedList.next = l1;
  }

  if (l2) {
    mergedList.next = l2;
  }

  return head.next;
};
