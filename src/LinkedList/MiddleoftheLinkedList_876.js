/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*
* 1           2     3    4    5
* slow/fast
*            slow  fast
*                  slow       fast(fast无法继续进行了,返回slow)
*
*
*
* 1           2     3    4    5       6
* slow/fast
*            slow  fast
*                  slow       fast
*                        slow         fast(fast走了一步,slow也走了一步, fast无法继续进行了,返回slow)
*
* */
var middleNode = function(head) {
  if (!head.next) {
    return head;
  }
  let slow = head;
  let fast = head;

  while (true) {
    if (!fast.next) { // 奇数情况
      return slow
    }
    fast = fast.next
    slow = slow.next
    if (!fast.next) { // 偶数情况
      return slow
    }
    fast = fast.next
  }
};

export default middleNode
