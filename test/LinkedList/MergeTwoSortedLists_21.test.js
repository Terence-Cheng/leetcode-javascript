import mergeTwoLists from '../../src/LinkedList/MergeTwoSortedLists_21'
import LinkedList from '../../lib/LinkedList/index'

test('1->2->4, 1->3->4', () => {
  const linkedList1 = new LinkedList()
  linkedList1.push(1).push(2).push(4)

  const linkedList2 = new LinkedList()
  linkedList2.push(1).push(3).push(4)

  let result = mergeTwoLists(linkedList1.getHead(), linkedList2.getHead())

  const nums = [];
  nums.push(result.val)
  while (result.next) {
    result = result.next
    nums.push(result.val)
  }

  expect(nums).toEqual([1,1,2,3,4,4])
})


test('2', () => {
  const linkedList1 = new LinkedList()
  linkedList1.push(2)

  const linkedList2 = new LinkedList()

  let result = mergeTwoLists(linkedList1.getHead(), linkedList2.getHead())

  const nums = [];
  nums.push(result.val)
  while (result.next) {
    result = result.next
    nums.push(result.val)
  }

  expect(nums).toEqual([2])
})


test(' , ', () => {
  const linkedList1 = new LinkedList()

  const linkedList2 = new LinkedList()

  let result = mergeTwoLists(linkedList1.getHead(), linkedList2.getHead())

  const nums = [];
  if (result) {
    nums.push(result.val)
  }
  while (result && result.next) {
    result = result.next
    nums.push(result.val)
  }
  console.log('1')
  expect(nums).toEqual([])
})
