/**
 * @author acky.guo
 * @date 17/4/25
 */

/**
 * selection sort主要思想是，
 * 假设arr[i]为最小值，每个数和arr[i]比较，每一轮得出一个最小值，
 * n（数组长度）就可以排序完成
 */

const swap = require('./swap.js')

function selectionSort(arr) {
	const len = arr.length
	let min
	for(let i = 0; i < len - 1; i++ ) {
		/**
		 * 从第一个数开始，假设当前这个数为最小值，只需要保存index即可
		 */
		min = i
		/**
		 * 1. i + 1是因为从假设为最小值的下一个数开始比较
		 * 2. j < len是因为，每轮排序是选出最小值，那么只需要比较len - i - 1次，
		 * len - i是因为排序已经进行了i轮，已经有i个数排序好了，减一是因为假设为最小值的那个数本身不需要比较，
		 * 但是由于是从i + 1开始，即是从前面开始排序完成，而不是像冒泡排序一样从后面开始排序完成，所以是 j < len
		 */
		for(let j = i + 1; j < len; j++ ) {
			/**
			 * 主要逻辑，意思是如果遇到比假设的最小值更小的数，
			 * 那么那个数就成为新的最小值
			 */
			if(arr[j] < arr[min]) min = j
		}
		/**
		 * 1. 此时的min已经是len - i - 1次比较后的最小值的index，不一定是原来的i
		 * 2. 如果一开始架设的那个数不是最小值，那么就和最小值原地交换位置，
		 * 因为一开始是假设第一个数为最小值，所以数组是从前面开始慢慢排序完成
		 */
		i !== min && swap(arr, i, min)
	}
	return arr
}

module.exports = selectionSort
