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
主要逻辑：
1. 先判断要删除的value是否存在
	
	内部由于和contain的逻辑相似，所以封装成内部使用的方法`#_find()`，如果找到value，find返回当前value的节点和parent的节点
2. 然后判断是否是root节点

	因为删除的方式不一样，如果不是root节点，就要找到parent，然后从parent中删除，如果是root节点，只要把root设为替代的元素就可以
3. 根据child的数量来删除

	1. leaf node

		没有child，直接设为null就可以
	2. with one child 

		有一个child，使用那个child代替删除节点就可以
	3. with two child

		最复杂的情况，主要有两种替代方案, 这边使用的是in-order predecessor

		1. in-order predecessor, 即把左子树的最右边节点作为替换的元素
		2. in-order successor, 即把右子树的最左边节点作为替换元素

		先找到要替代的元素，然后把要删除节点的child都assign到要替换的元素，最后，把替换的元素放到正确的位置上

		关键在于正确的清除和建立节点的引用关系

## _traverse()
这个方法在内部使用，用来遍历binary-search-tree的每一个节点，`#size()`，`#toArray()`的内部就是使用这个方法来实现

## Reference
[Computer science in JavaScript: Binary search tree, Part 1](https://www.nczonline.net/blog/2009/06/09/computer-science-in-javascript-binary-search-tree-part-1/)

[Computer science in JavaScript: Binary search tree, Part 2](https://www.nczonline.net/blog/2009/06/16/computer-science-in-javascript-binary-search-tree-part-2/)