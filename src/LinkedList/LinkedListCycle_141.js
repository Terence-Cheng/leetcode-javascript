/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
* 快慢指针
*   快指针走两格，慢指针走一格
*   快慢指针相等的时候终止，或者快指针or慢指针走到链表的边界的时候终止
* */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
 if (!head) {
   return false
 }
 let linkSlow = head.next;
 let linkQuick = null;
 if (linkSlow) {
   linkQuick = linkSlow.next
 }

 if (linkSlow === null || linkQuick === null) {
   return false;
 }
 while (true) {
   linkSlow = linkSlow.next
   if (linkQuick.next && linkQuick.next.next) {
     linkQuick = linkQuick.next.next
   } else {
     return false
   }

   if (linkQuick === linkSlow) {
     return true;
   }
 }

};


export default hasCycle
