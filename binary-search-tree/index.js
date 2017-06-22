/**
 * @author acky.guo
 * @date 17/5/3
 */


class BinarySearchTree {
	constructor() {
		this._root = null
	}

	add(value) {
		// allow add multiple value once
		Array.isArray(value) && value.forEach(item => this.add(item))
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
					current.left = node
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

	_find(value) {
		let current = this._root
		let parent = null
		let found = false
		while (current) {
			if (value < current.value) {
				parent = current
				current = current.left
			} else if (value > current.value) {
				parent = current
				current = current.right
			} else {
				found = true
				break
			}
		}		
		if (found) {
			return {
				current,
				parent 
			}
		}
		return found
	}

	contains(value) {
		if (this._find(value)) {
			return true
		} else {
			return false
		}
	}

	remove(value) {
		const found = this._find(value)
		let childrenCount = 0
		let current = null
		let parent = null
		let replacement = null
		let replacementParent = null
		if (found) {
			current = found.current
			parent = found.parent
			childrenCount = (current.left ? 1 : 0) + (current.right ? 1 : 0)
			if (current === this._root) {
				switch (childrenCount) {
					case 0:
						this._root = null
						break
					case 1:
						this._root = current.left === null
									 ? current.right
									 : current.left
						break
					case 2:
						replacement = this._root.left

						/**
						 * 1. in-order predecessor, 即把左子树的最右边节点作为替换的元素
						 * 2. in-order successor, 即把右子树的最左边节点作为替换元素
						 * 两种替换的方案都是可行的，这边采用的是第一种 
						 */
						while (replacement.right !== null) {
							replacementParent = replacement
							replacement = replacement.right
						}

						/**
						 * 如果没有repalcementParent, 那么就是this._root的直接子节点，就是this._root.left
						 */
						if (replacementParent !== null) {
							/**
							 * 1. 因为replacement已经是最右边的元素，所以replacement.right === null
							 * 2. 但是replacement.left不一定是否有值，如果有值，就作为repalcementParent.right的值，如果没有值，那么replacementParent.right === null
							 */
							replacementParent.right = replacement.left
							replacement.right = this._root.right
							replacement.left = this._root.left
						} else {
							/**
							 * 例子：删除10
							 * 				10
							 * 			 |		|
							 * 		   7	      15
							 *       |
							 *     5		
							 * 此时repalcement是7, 只要把this._root右边节点的child转到7的右节点就可以
							 */
							replacement.right = this._root.right
						}

						this._root = replacement
				}
			} else {
				switch (childrenCount) {
					case 0:
						/**
						 * 判断current是左节点还是右节点
						 */
						if (current.value < parent.value) {
							parent.left = null
						} else {
							parent.right = null
						}
						break
					case 1:
						if (current.value < parent.value) {
							parent.left = current.left === null
										  ? current.right
										  : current.left
						} else {
							parent.right = current.left === null
										   ? current.right
										   : current.left
						}
						break
					case 2:
                        replacement = current.left;
						while (replacement.right) {
							replacementParent = replacement
							replacement = replacement.right
						}

						/**
						 * 例子：删除7
						 * 
						 * 				10
						 * 			  |	   |
						 * 			7		15
						 * 	      |   |
						 * 		5		9
						 * 			  |
						 * 			8
						 */		

						if (replacementParent !== null) {
							replacementParent.right = replacement.left
							replacement.left = current.left
							replacement.right = current.right
						} else {
							/**
							 * 把原来节点的child都转到替换的节点
							 */
							replacement.right = current.right
						}


						/**
						 * 判断删除的值是左节点还是右节点，
						 * 如果是左节点，替换的元素就放在删除的值的父元素的左边，
						 * 如果是右节点，替换的元素就放在删除的值的父元素的右边
						 */
                        if (current.value < parent.value){
                            parent.left = replacement;
                        } else {
                            parent.right = replacement;
                        }						
				}
			}
		}
	}

	_traverse(handler) {
		const current = this._root
		/**
		 * 例子：
		 * 
		 * 				  10
		 * 			   |	  |
		 * 			 7		   15
		 * 	      |     |
		 * 		5		  9
		 * 	  |	  |	    |
		 * 	 3	   6   8
		 * 遍历的顺序就是[3, 5, 6, 7, 8, 9, 10, 15]，
		 * 即先从最左边开始，然后中间，然后右边
		 */		
		const call = (node) => {
			if(node.left) call(node.left)
			handler.call(this, node)
			if(node.right) call(node.right)
		}
		this._root !== null && call(current)
	}

	size() {
		let count = 0
		this._root !== null && this._traverse(() => {
			count++
		})
		return count
	}

	toArray() {
		const arr = []
		this._root !== null && this._traverse(({ value }) => {
			arr.push(value)
		})
		return arr
	}

	toString() {
		return this.toArray().toString()
	}
}

module.exports = new BinarySearchTree()