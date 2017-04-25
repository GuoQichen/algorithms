/**
 * author acky.guo
 * 17/4/25
 */

const swap = require('./swap.js')

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

module.exports = selectionSort
