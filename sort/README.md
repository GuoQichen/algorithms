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

## 参考
[排序算法](http://javascript.ruanyifeng.com/library/sorting.html)
[Computer science in JavaScript: Bubble sort](https://www.nczonline.net/blog/2009/05/26/computer-science-in-javascript-bubble-sort/)