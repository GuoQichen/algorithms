/**
 * @author akcy.guo
 * @date 17/4/28
 */
const swap = require('./swap')

// out-place
function quickSortOutPlace(arr) {
	if(arr.length < 2) return arr
	const middle = Math.floor(arr.length/2)
	const pivot = arr.splice(middle, 1)
	const left = []
	const right = []
	for(let value of arr) {
		value < pivot ? left.push(value) : right.push(value)
	}
	return quickSortOutPlace(left).concat(pivot, quickSortOutPlace(right))
}

// in-place
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
function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
	let index
	if(arr.length < 2) return arr
	index = partition(arr, left, right)
	if(left < index - 1) quickSortInPlace(arr, left, index - 1)
	if(right > index) quickSortInPlace(arr, index, right)
	return arr
}

module.exports = { quickSortInPlace, quickSortOutPlace }