# doubly linked list 
使用javascript实现双向链表，提供的API和[单向链表](https://github.com/GuoQichen/algorithms/tree/master/linked-list)一样，包括`#add`，`#items`, `#remove`, `#size`, `#toArray`, `#toString`

## difference
在单向链表中，只保存了`this._head`，但是在双向链表中，还保存了`this._tail`，主要因为双向链表的每个节点储存三个field，分别是信息域，指向前一个节点的指针，和指向后一个节点的指针，所以双向链表可以从两个方向遍历整个列表

```js
// DoublyLinkedList的constructor
constructor() {
    this._length = 0
    this._head = null
    this._tail = null
}
```

在`#add`中，在单项列表需要循环找到最后的节点，而在双向链表中由于直接保存着`this._tail`，所以可以直接把`this._tail.next = newNode`，值的注意的是因为是双向链表，所以也要建立后面节点对前一个节点的引用关系`newNode.prev = this._tail`

```js
// add方法的核心逻辑
if (this._length === 0) {
    this._head = node
    this._tail = node
} else {
    this._tail.next = node 
    node.prev = this._tail
    this._tail = node
}
```

在`#remove`中，主要的区别就是因为多了指向前一个节点的值指针，所以在删除节点时指针关系的处理会比单向列表复杂一些，而且在处理删除第一个节点和最后一个节点时，需要额外处理而不是单纯”跳过“要删除的节点

## reference
[Computer science in JavaScript: Doubly-linked lists](https://www.nczonline.net/blog/2009/04/21/computer-science-in-javascript-doubly-linked-lists/)