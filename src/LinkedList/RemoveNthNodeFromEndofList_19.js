/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/*
* 快慢指针，快指针比慢指针提前走n步，快指针走到链表尾的时候，慢指针就是倒数第n个节点的前一个节点
* 但要注意一种特殊的情况，上面其实是快指针比慢指针多走了n步，是建立在节点在>=n+1的基础上，如果节点为n个，删除倒数第n个需要考虑进去
* */
var removeNthFromEnd = function(head, n) {
  let slowP = head;
  let quickP = head;
  for (let i = 0; i < n - 1; i++) {
    if (quickP.next) {
      quickP = quickP.next
    } else {
      return head; // n超过链表的长度
    }
  }

  // 兼容 节点的个数为n的情况
  if (quickP.next) {
    quickP = quickP.next
  } else {
    return head.next;
  }

  while (quickP.next) {
    quickP = quickP.next
    slowP = slowP.next
  }

  // 删除节点
  slowP.next = slowP.next.next
  return head;
};


export default removeNthFromEnd
