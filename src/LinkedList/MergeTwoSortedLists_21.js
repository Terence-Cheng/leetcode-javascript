/*
* 两个有序链表的合并
* */
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  const result = new ListNode(null);
  let resultP = result;

  function createNextNode(val) {
    resultP.next = new ListNode(val)
    resultP = resultP.next;
  }

  while (true) {
    if (p1 && p2) {
      if (p1.val <= p2.val) {
        createNextNode(p1.val)
        p1 = p1.next;
      } else {
        createNextNode(p2.val)
        p2 = p2.next;
      }
    } else if (p1) {
      createNextNode(p1.val)
      p1 = p1.next;
    } else if (p2) {
      createNextNode(p2.val)
      p2 = p2.next;
    } else {
      break;
    }
  }

  return result.next;
};

export default mergeTwoLists
