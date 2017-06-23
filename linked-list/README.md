# linked-list
使用javascript实现单向链表，构造函数是`LinkedList`，构造出来的实例有以下几个方法，`#add`, `#items`, `#remove`, `#size`, `#toArray`, `#toString`，用来完成对数据的基本操作

## add
往list中添加新的节点

1. 构造节点

    linked-list的节点包括两部分，一部分是信息域，保存数据，一部分是指针域，保存指向下一个节点的指针

```js
const node = {
    data: value,
    next: null
}
```

2. 找到合适的位置

    通过`node.next`循环往下查找，知道遇到`node.next === null`的节点，然后把新的节点add上去

## items
接受index作为参数，返回对应节点储存的信息域

主要逻辑是，递减index查找，当减到0时返回对应的节点的值

## remove
linked-list中删除一个节点只需要把前一个节点的`node.next`指向下一个节点即可

```js
// previsou 前一个节点
// current 当前要删除的节点
previous.next = current.next
```

## size
返回linked-list的长度

直接返回内部使用的`this._length`即可

## toArray 
返回linked-list的数组形式

使用`while`遍历list，每经过一个节点，就把它的值`push`到返回的数组中

## toString
返回linked-list的字符串形式

实际上是调用`Array.prototype.toString`

## reference
[Computer science in JavaScript: Linked list](https://www.nczonline.net/blog/2009/04/13/computer-science-in-javascript-linked-list/)