function ListNode(val) {
  this.val = val;
  this.next = null;
}

export default function mergeTwoLists(l1, l2) {
  let mergedList = new ListNode(-1);
  let list1 = l1;
  let list2 = l2;
  const head = mergedList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      mergedList.next = list1;
      list1 = list1.next;
    } else {
      mergedList.next = list2;
      list2 = list2.next;
    }

    mergedList = mergedList.next;
  }

  if (list1) {
    mergedList.next = list1;
  }

  if (list2) {
    mergedList.next = list2;
  }

  return head.next;
}
