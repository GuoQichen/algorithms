/**
 * author acky.guo
 * 17/4/25
 */

function swap(arr, i, j) {
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

function bubbleSort(arr) {
	const len = arr.length
	for(let i = 0; i < len - 1; i++ ) {
		for(let j = 0; j < len - i - 1; j++) {
			if(arr[j] > arr[j+1]) swap(arr, j, j+1)
		}
	}
	return arr
}

module.exports = bubbleSort