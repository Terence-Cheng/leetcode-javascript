import { defaultEquals } from '../utils'
import { Node } from './models/linked-list-models'

export default class LinkedList {
  constructor (equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  /**
   * push an element to at the tail
   * @param element
   */
  push (element) {
    // isEmpty push
    // find the tail push
    const node = new Node(element)
    if (this.isEmpty()) {
      this.head = node
    } else {
      const tailElement = this.getElementAt(this.count - 1)
      tailElement.next = node
    }

    this.count++
    return this;
  }

  insert (element, index) {
    if (index < 0 || index > this.count) {
      return false
    }

    const newNode = new Node(element)

    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      const indexPreNode = this.getElementAt(index - 1)
      newNode.next = indexPreNode.next
      indexPreNode.next = newNode
    }
    this.count++
    return true
  }

  /**
   * 获取某个特定的位置的元素 源码中写的是 index 可以等于index
   * @param index
   * @returns {undefined}
   */
  getElementAt (index) {
    if (index >= this.count || index < 0) {
      return undefined
    }

    let currentEle = this.head
    let i = 0
    for (; i < index; i++) {
      currentEle = currentEle.next
    }
    return currentEle
  }

  getElementAt2 (index) {
    if (index >= 0 && index <= this.count) { // {1}
      let node = this.head // {2}
      for (let i = 0; i < index && node != null; i++) { // {3}
        node = node.next
      }
      return node // {4}
    }
    return undefined // {5}
  }

  remove (element) {
    const index = this.indexOf(element)
    this.removeAt(index)
  }

  /**
   * delete the node from the inputted index
   * @param index
   * @returns {element}
   */
  removeAt (index) {
    if (index < 0 || index >= this.count) {
      return undefined
    }
    if (index === 0) {
      const firstNode = this.head
      this.head = this.head.next
      this.count--
      return firstNode.val
    } else if (index < this.count) {
      const preNodeDeleted = this.getElementAt(index - 1)
      const nodeDeleted = preNodeDeleted.next
      preNodeDeleted.next = nodeDeleted.next
      this.count--
      return nodeDeleted.element
    }
  }

  indexOf (element) {
    let currentNode = this.head
    let index = 0
    let flag = false
    while (currentNode) {
      if (this.equalsFn(currentNode.val, element)) {
        flag = true
        break
      }
      index++
      currentNode = currentNode.next
    }
    return flag ? index : -1
  }

  isEmpty () {
    return this.count === 0
  }

  size () {
    return this.count
  }

  getHead () {
    return this.head
  }
}
