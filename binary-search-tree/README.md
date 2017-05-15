# binary search tree

## add()
核心逻辑：

```js
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
```

利用binary-search-tree的特点，节点左边的值比节点小，节点右边的值比节点大，在添加一个节点的时候，每次去判断是应该往左子树走还是往右子树走，如果遇到一个空的位置，就添加节点


## contains()
核心逻辑：

```js
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
```

主要思路也是利用binary-search-tree的特点，每次根据节点的值和要查询的值比较，可以确定一个方向，如果这个方向上有相等的值，则返回true

## remove()

## _traverse()
这个方法在内部使用，用来遍历binary-search-tree的每一个节点，`#size()`，`#toArray()`的内部就是使用这个方法来实现