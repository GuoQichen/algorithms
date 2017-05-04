/**
 * @author acky.guo
 * @date 17/5/3
 */

class BinarySearchTree {
	constructor() {
		this._root = null
	}

	add(value) {
		const node = {
			value,
			left: null,
			right: null
		}
		if(this._root === null) {
			this._root = node
			return
		}
		let current = this._root			
		while(true) {
			if(value < current.value) {
				if(current.left === null) {
					current.lefe = node
				} else {
					current = current.left
				}
			} else if(value > current.value) {
				if(current.right === null) {
					current.right = node
				} else {
					current = current.right
				}
			} else {
				break
			}
		}
	}

	contains(value) {
		const current = this._root
		let found = false
		while(current) {
			if(value < current.value) { 
				current = current.left
			} else if(value > current.value) {
				current = current.right
			} else {
				found = true
				break
			} 
		}
		return found
	}

	remove(value) {

	}

	_traverse(handler) {
		if(this._root === null) throw new Error('root element is null')
		const current = this._root
		const call = (node) => {
			if(node.left) call(node.left)
			handler.call(this, node)
			if(node.right) call(node.right)
		}
		call(current)
	}

	size() {
		let count = 0
		this._traverse(() => {
			count++
		})
		return count
	}

	toArray() {
		const arr = []
		this._traverse(({ value }) => {
			arr.push(value)
		})
		return arr
	}

	toString() {
		return this.toArray().toString()
	}
}

module.exports = new BinarySearchTree()