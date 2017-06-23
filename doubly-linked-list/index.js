/**
 * @author acky.guo
 * @date 17/6/23
 */

class DoublyLinkedList {
    constructor() {
        this._length = 0
        this._head = null
        this._tail = null
    }

    add(value) {
        let current = this._head
        const node = {
            data: value,
            prev: null,
            next: null
        }
        if (this._length === 0) {
            this._head = node
            this._tail = node
        } else {
            this._tail.next = node
            node.prev = this._tail
            this._tail = node
        }
        this._length++
    }

    _find(index) {
        let i = 0
        let current
        if (index < 0 || index > this._length - 1) return null
        current = this._head
        /**
         * 循环的次数就表示指针移动了几次，
         * 当index === 0时，不进入循环，即指针不移动，返回第一个node
         * 当index === 1时，0 < 1，进入循环，指针移动一次，然后i++，i不小于index，不进入循环
         * 当index === 2时，进入循环两次，即指针移动两次，从一开指向0移到指向1，然后从指向1移到指向2
         */
        while (i++ < index) {
            current = current.next
        }
        return current        
    }

    items(index) {
        return (this._find(index) || {}).data
    }

    remove(index) {
        const found = this._find(index)
        if (found !== null) {
            const current= found
            switch (index) {
                case 0: {
                    const replacement = current.next
                    this._head = replacement
                    /**
                     * this._head === null 表示 current.next === null，
                     * 即list中只有一个节点，所以tail也必须设置为空
                     */
                    if (this._head === null) {
                        this._tail = null
                    } else {
                        replacement.prev = null
                    }
                    break
                }
                case this._length - 1: {
                    const replacement = current.prev
                    replacement.next = null
                    this._tail = replacement
                    break
                }
                default: {
                    current.prev.next = current.next
                    current.next.prev = current.prev
                }
            }
            this._length--
            return current.data
        }
        return null
    }

    size() {
        return this._length
    }

    toArray() {
        const arr = []
        let current = this._head
        while (current !== null) {
            arr.push(current.data)
            current = current.next
        }
        return arr
    }

    toString() {
        return this.toArray().toString()
    }
}

module.exports = new DoublyLinkedList()