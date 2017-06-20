/**
 * @author akcy.guo
 * @date 17/4/28
 */
const swap = require('./swap')

/**
 * 快速排序是最快的排序，通过确定一个支点，然后把比支点小的值放在支点前，
 * 比支点大的值放在支点后，每次确定一个支点的位置，然后对左右两边不断递归，
 * 最后排序完成
 */

// out-place
function quickSortOutPlace(arr) {
	/**
	 * 因为quickSortOutPlace将被递归调用，
	 * 如果当只有一个数的时候不直接返回的话，
	 * 会导致死循环
	 */
	if(arr.length < 2) return arr
	/**
	 * 选定中点为支点的值，
	 * 其实数组中任何一项都可以作为中点
	 */
	const middle = Math.floor(arr.length/2)
	/**
	 * 这边先从数组中取出支点的值，
	 * 因为虽然选定中点作为支点，但是支点最终的位置并不一定是中点，
	 * 所以先取出，最后使用concat返回支点位置确定的数组
	 */
	const pivot = arr.splice(middle, 1)
	const left = []
	const right = []
	/**
	 * 核心逻辑，遍历取出支点后的数组，
	 * 然后分成两个数组，
	 * 一个比支点大，一个比支点小
	 */
	for(let value of arr) {
		value < pivot ? left.push(value) : right.push(value)
	}
	/**
	 * 最后递归调用，这边的实现是out-place，即返回一个内存空间和原来不一样的数组
	 */
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