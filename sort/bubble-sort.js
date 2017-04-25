/**
 * author acky.guo
 * 17/4/25
 */

const swap = require('./swap.js')

function bubbleSort(arr) {
	const len = arr.length
	for(let i = 0; i < len - 1; i++ ) {
		for(let j = 0; j < len - i - 1; j++) {
			arr[j] > arr[j+1] && swap(arr, j, j+1)
		}
	}
	return arr
}

module.exports = bubbleSort