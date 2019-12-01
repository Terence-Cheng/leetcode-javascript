import hasCycle from '../../src/LinkedList/LinkedListCycle_141'
import LinkedList from '../../lib/LinkedList/index'

test('head = [3,2,0,-4], pos = 1', () => {
  const linkedList = new LinkedList()
  linkedList.push(3).push(2).push(0).push(-4)
  const lastNode = linkedList.getElementAt(linkedList.size() - 1)
  lastNode.next = linkedList.getElementAt(1)

  // console.log(JSON.stringify(linkedList))

  const result = hasCycle(linkedList.getHead())
  expect(result).toBe(true)
})


test('head = [1,2], pos = 0', () => {
  const linkedList = new LinkedList()
  linkedList.push(1).push(2)
  const lastNode = linkedList.getElementAt(linkedList.size() - 1)
  lastNode.next = linkedList.getElementAt(0)

  // console.log(JSON.stringify(linkedList))

  const result = hasCycle(linkedList.getHead())
  expect(result).toBe(true)
})

test('head = [1], pos = -1', () => {
  const linkedList = new LinkedList()
  linkedList.push(1)
  // const lastNode = linkedList.getElementAt(linkedList.size() - 1)
  // lastNode.next = linkedList.getElementAt(0)

  // console.log(JSON.stringify(linkedList))

  const result = hasCycle(linkedList.getHead())
  expect(result).toBe(false)
})
