function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

const mergeTwoLists = (l1, l2) => {
  let lists = null;
  let curNode = null;
  if (l1 === null && l2 === null) return null;
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val) {
    lists = new ListNode(l1.val);
    l1= l1.next;
  }
  else {
    lists = new ListNode(l2.val); 
    l2= l2.next;
  }

  curNode = lists;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curNode.next = new ListNode(l1.val);
      curNode = curNode.next;
      l1 = l1.next;
    }
    else {
      curNode.next = new ListNode(l2.val);
      curNode = curNode.next;
      l2 = l2.next;
    }
  }

  if (l1 !== null) curNode.next = l1;
  else curNode.next = l2;

  return lists;
}