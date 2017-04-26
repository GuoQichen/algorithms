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


## 参考

1. [排序算法](http://javascript.ruanyifeng.com/library/sorting.html)
2. [Computer science in JavaScript: Bubble sort](https://www.nczonline.net/blog/2009/05/26/computer-science-in-javascript-bubble-sort/)
3. [Computer science in JavaScript: Selection sort](https://www.nczonline.net/blog/2009/09/08/computer-science-in-javascript-selection-sort/)