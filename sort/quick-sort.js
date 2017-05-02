/**
 * @author akcy.guo
 * @date 17/4/28
 */
const swap = require('./swap')

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

function quickSort(arr, left = 0, right = arr.length - 1) {
	let index 
	if(arr.length < 2) return arr
	index = partition(arr, left, right)
	if(left < index - 1) quickSort(arr, left, index - 1)
	if(index < right) quickSort(arr, index, right)
	return arr
}

module.exports = { quickSort }