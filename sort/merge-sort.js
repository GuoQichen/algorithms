/**
 * @author acky.guo
 * @date 17/4/27
 */

function merge(left, right) {
	const result = []
	let i = 0
	let j = 0
	while(i < left.length && j < right.length) {
		result.push(left[i] < right[j] ? left[i++] : right[j++])
	}
	return result.concat(left.slice(i)).concat(right.slice(j))
}

function mergeSort(arr) {
	const len = arr.length
	if(len < 2) return arr
	const middle = Math.floor(len/2)
	const left = arr.slice(0, middle)
	const right = arr.slice(middle)
	arr.splice(0, len, ...merge(mergeSort(left), mergeSort(right)))
	return arr
}

module.exports = { mergeSort, merge }