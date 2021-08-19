const removeNthFromEnd = (head, n) => {
  let nodeNums = 0;
  let node = head;
  let prevDeletedNode = null;
  while (node) {
    nodeNums++;
    node=node.next;
  } 

  if (nodeNums === n) return head.next;

  prevDeletedNode = head;

  for (let i = 1; i < nodeNums - n; i++) {
    prevDeletedNode = prevDeletedNode.next;
  }
  
  if (prevDeletedNode.next === null) return null;

  prevDeletedNode.next = prevDeletedNode.next.next;

  return head;
}