import LinkedList from '../../lib/LinkedList/index'
import middleNode from '../../src/LinkedList/MiddleoftheLinkedList_876'

test('[1,2,3,4,5]', () => {
  const l = new LinkedList()
  l.push(1).push(2).push(3).push(4).push(5)

  let result = middleNode(l.getHead())

  expect(result).toEqual(l.getElementAt(2))
})


test('[1,2,3,4,5,6]', () => {
  const l = new LinkedList()
  l.push(1).push(2).push(3).push(4).push(5).push(6)

  let result = middleNode(l.getHead())

  expect(result).toEqual(l.getElementAt(3))
})

test('[1]', () => {
  const l = new LinkedList()
  l.push(1)

  let result = middleNode(l.getHead())

  expect(result).toEqual(l.getElementAt(0))
})
