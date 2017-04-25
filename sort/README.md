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

## 参考

1. [排序算法](http://javascript.ruanyifeng.com/library/sorting.html)
2. [Computer science in JavaScript: Bubble sort](https://www.nczonline.net/blog/2009/05/26/computer-science-in-javascript-bubble-sort/)
3. [Computer science in JavaScript: Selection sort](https://www.nczonline.net/blog/2009/09/08/computer-science-in-javascript-selection-sort/)