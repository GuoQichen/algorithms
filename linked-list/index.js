/**
 * @author acky.guo
 * @date 17/6/23
 */

class LinkedList {
    constructor() {
        this._head = null
        this._length = 0
    }

    _find(index) {
        let i = index
        let current
        let previous
        if (index < 0 || index > this._length - 1) return null
        current = this._head
        while (i-- > 0) {
            previous = current
            current = current.next
        }
        return {
            previous,
            current
        }
    }

    add(value) {
        const node = {
            data: value,
            next: null
        }
        let current
        
        if (this._head === null) {
            this._head = node
        } else {
            current = this._head
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        this._length++
    }

    items(index) {
       const found = this._find(index)
       return found === null 
              ? found
              : found.current.data
    }

    remove(index) {
        const found = this._find(index)
        if (found !== null) {
            let { previous, current } = found
            /**
             * little tricky，
             * 删除链表的节点只要前一个节点的next指向下一个节点即可
             */
            if (index === 0) {
                this._head = current.next
            } else {
                previous = current.next            
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

module.exports = new LinkedList()