import removeNthFromEnd from '../../src/LinkedList/RemoveNthNodeFromEndofList_19'
import LinkedList from '../../lib/LinkedList/index'

test('1->2->3->4->5, and n = 2', () => {
  const linkedList1 = new LinkedList()
  linkedList1.push(1).push(2).push(3).push(4).push(5)

  let result = removeNthFromEnd(linkedList1.getHead(), 2)

  const nums = [];
  nums.push(result.val)
  while (result.next) {
    result = result.next
    nums.push(result.val)
  }

  expect(nums).toEqual([1,2,3,5])
})

test('1, and n = 1', () => {
  const linkedList1 = new LinkedList()
  linkedList1.push(1)

  let result = removeNthFromEnd(linkedList1.getHead(), 1)

  const nums = [];
  if (result) {
    nums.push(result.val)
  }
  while (result && result.next) {
    result = result.next
    nums.push(result.val)
  }

  expect(nums).toEqual([])
})

test('1,2 and n = 2', () => {
  const linkedList1 = new LinkedList()
  linkedList1.push(1).push(2)

  let result = removeNthFromEnd(linkedList1.getHead(), 2)

  const nums = [];
  if (result) {
    nums.push(result.val)
  }
  while (result.next) {
    result = result.next
    nums.push(result.val)
  }

  expect(nums).toEqual([2])
})
