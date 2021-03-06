# sort algorithms
## bubble sort
1. swap用来转换两个数组项的位置

	```
	function swap(arr, i, j) {
		const temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
	```

2. bubbleSort用来冒泡排序数组

	```
	function bubbleSort(arr) {
		const len = arr.length
		for(let i = 0; i < len - 1; i++ ) {
			for(let j = 0; j < len - i -1; j++) {
				if(arr[j] > arr[j+1]) swap(arr, j, j+1)
			}
		}
		return arr
	}
	```
	1. 外部循环

		外部循环表示排序需要进行几轮，每一轮会确定一个数组项的位置，即每一轮冒泡都会得到一个最大的数

		`len -1 `表示，排序只需要进行`len - 1`轮，因为如果数组有5个数，其实只需要循环4轮，因为4个数的位置已经固定，最后一个数的位置也已经固定，不必再进行
	2. 内部循环

		内部循环表示每一轮需要做几次比较

		`len - i`表示，只需要比较`len - i`次，因为每一轮会确定1个数组项的位置，确定位置的数组项就没必要再比较，所以i轮就能确定i个不需要比较的数组项

		`len - i - 1`，如果数组有5个数，其实只需要比较4次就能把5个数都比较了

		`if(arr[j] > arr[j+1]) swap(arr, j, j+1)`中的`arr[j] > arr[j+1]`，因为排序是升序，所以表示的是如果前一个数比后一个数大，就调整位置

## selection sort
1. selectionSort用来选择排序

	```
	function selectionSort(arr) {
		const len = arr.length
		let min = 0
		for(let i = 0; i < len - 1; i++ ) {
			min = i
			for(let j = i + 1; j < len; j++ ) {
				if(arr[j] < arr[min]) min = j
			}
			i !== min && swap(arr, i, min)
		}
		return arr
	}
	```
	1. 外部循环

		表示的是需要几轮排序，每一轮都会确定一个数组项的位置，即每一轮排序都会得到一个最小值，每一轮排序开始的时候，`min = i`表示假设`arr[i]`为最小值

		`len - 1`表示，排序只需要进行`len - 1`轮，原因同上
	2. 内部循环

		`j = i + 1`表示排序从i的下一项开始，因为在每一轮排序开始，即外部循环已经假设`arr[i]`为最小值

		`if(arr[j] < arr[min]) min = j`表示，每一次从i的后面一项开始和`arr[i]`比较，如果遇到比`arr[i]`更小的值，就把index赋给min

		`i !== min && swap(arr, i, min)`表示如果`arr[i]`不是最小值，就使用swap调整位置

## insertion sort
1. insertion用来插入排序

	```
	function insertionSort(arr) {
		const len = arr.length
		let j = 0
		let value
		for(let i = 1; i < len; i++) {
			value = arr[i]
			for(j = i - 1; j > -1 && arr[j] > value; j-- ) {
				arr[j+1] = arr[j]
			}
			arr[++j] = value
		}
		return arr
	}	
	```
	1. 外部循环

		`i`表示的是没有被排序的数组项

		`i = 1`表示从数组的第二项开始，因为插入排序把数组分成两部分，一部分是排序好的，一部分是未排序的，如果只有一项，就认为这一项是排序好的，所以从第二项开始排序

		`value = arr[i]`先把要排序的值保存起来，因为在内部循环寻找插入位置的时候每一项都需要往后移调整位置
	2. 内部循环

		`j = i - 1`表示从要排序的数组项的前一项开始往前，也就是排序好的部分的最后一项开始往前

		`arr[j] > value`在进入内部循环的时候判断，如果`arr[i] > arr[j]`，即要排序的项大于已经排好的部分的最大值，那么顺序就没错，就不必进入内部循环调整位置，否则就必须进入内部循环寻找插入的位置

		`arr[j+1] = arr[j]`表示把已排序部分的数组项往后移一位，例如`arr[1] = arr[0]`，就是把数组项的第一位移到第二位

		`arr[j+1] = value`表示把要排序的值插入到正确的位置，`value`是在外部循环中每一次要排序的值，因为在查找插入位置的过程中每一位都会后移，`arr[i]`会被`arr[j]`覆盖，所以`arr[i]`就需要先保存起来，这边值得注意的是为什么是`arr[++j]`而不是`arr[j]`，因为`j--`，例如查找插入位置时一直找到第一位，那么内部循环后`j`最后的值为-1而不是0，所以需要`++j`，即已经找到了插入位置，但是循环最后`j--`，所以需要加回来

## merge sort
1. merge函数，用来把两个排序好的数组合并成一个

	```
	function merge(left, right) {
		const result = []
		let i = 0
		let j = 0
		while(i < left.length && j < right.length) {
			result.push(left[i] < right[j] ? left[i++] : right[j++])
		}
		return result.concat(left.slice(i)).concat(right.slice(j))
	}	
	```
	`i < left.length && j < right.length`表示，如果两个数组中有一个已经合并完了，就不再继续合并，而是把没合并完的数组直接和结果concat

	`result.concat(left.slice(i)).concat(right.slice(j))`表示，还有数组没合并完，把没合并的数组项拼接在result的后面

	`left.slice(i)`表示，把剩下的数组项slice出来，用于concat在结果后面

	`result.push(left[i] < right[j] ? left[i++] : right[j++])`表示，每次把已经排序好的两个数组的第一项来比较，小的那个push进结果，然后`i++`

	`left[i++]`表示，后置`++`表示先计算表达式的值，然后再改变变量的值，相当于先`left[i]`然后`i++`
2. mergeSort函数

	```
	function mergeSort(arr) {
		const len = arr.length
		if(len < 2) return arr
		const middle = Math.floor(len/2)
		const left = arr.slice(0, middle)
		const right = arr.slice(middle)
		arr.splice(0, len, ...merge(mergeSort(left), mergeSort(right)))
		return arr
	}	
	```
	`if(len < 2) return arr`表示，如果数组只有一项就直接返回，因为mergeSort是递归调用，所以如果表示数组的拆分粒度到一项

	`arr.slice(0, middle)`表示，使用middle把数组分成两部分
	
	`merge(mergeSort(left), mergeSort(right))`表示，在没有达到拆分粒度的时候继续拆分，达到拆分粒度的时候不断去merge成一个数组，最后先完成left数组的合并，然后再完成right数组的合并

	`arr.splice(0, len)`表示，把输入的arr数组清空，为了实现`in-place sort`

	`...merge(mergeSort(left), mergeSort(right))`表示，把最后的结果填充进清空的arr数组，实现`in-place sort`

## quick sort
1. partition函数

	```
	function partition(arr, left, right) {
		const pivot = arr[Math.floor((left + right)/2)]
		while(left <= right) {
			while(arr[left] < pivot) {
				left++
			}
			while(arr[right] > pivot) {
				right--
			}
			if(left <= right) {
				swap(arr, left, right)
				left++
				right--
			}
		}
		return left
	}	
	```
	`const pivot = arr[Math.floor((left + right)/2)]`表示，选择中间的元素作为支点

	`while(left <= right) { //... }`表示，分区循环，循环完成后，数组被分为两部分，小于支点的值和大于支点的值，循环结束的标志是左边指针大于右边指针，即所有元素都比较过了

	`while(arr[left] < pivot) { left++ }`表示，左边指针成最左边开始寻找大于等于支点的值，右边同理

	`if(left <= right) { //... }`表示，只有在左边指针小于等于右边指针的时候，才swap两个元素的位置, 里面的`left++`和`right++`可以避免多一次循环，因为swap之后，`arr[left]`的值一定是小于`pivot`的，所以直接`left++`避免多一次的`while(arr[left] < pivot) { left++ }`，右边同理
	
	```
	function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
		let index
		if(arr.length < 2) return arr
		index = partition(arr, left, right)
		if(left < index - 1) quickSortInPlace(arr, left, index - 1)
		if(right > index) quickSortInPlace(arr, index, right)
		return arr
	}	
	```
	`if(arr.length < 2) return arr`表示，如果数组项只有一个或者为空，直接返回数组

	`index = partition(arr, left, right)`表示，第一次分区，把整个数组分成两部分，接下去分别对分区后的左右两部分递归调用sort函数

## 参考

1. [排序算法](http://javascript.ruanyifeng.com/library/sorting.html)
2. [Computer science in JavaScript: Bubble sort](https://www.nczonline.net/blog/2009/05/26/computer-science-in-javascript-bubble-sort/)
3. [Computer science in JavaScript: Selection sort](https://www.nczonline.net/blog/2009/09/08/computer-science-in-javascript-selection-sort/)
4. [Computer science in JavaScript: Insertion sort](https://www.nczonline.net/blog/2012/09/17/computer-science-in-javascript-insertion-sort/)
5. [Computer science in JavaScript: Merge sort](https://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/)
6. [Computer science in JavaScript: Quicksort](https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/)