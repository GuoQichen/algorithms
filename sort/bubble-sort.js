/**
 * @author acky.guo
 * @date 17/4/25
 */

/**
 * bubble sort通过不断比较相邻两项的值，就像冒泡一样把最大值放到最后，
 * 每一轮确定一个最大值，n（数组长度）轮就可以排序完成
 */

/**
 * swap用来in-place转换数组中两项的位置
 */
const swap = require('./swap.js')

function bubbleSort(arr) {
	const len = arr.length
	/**
	 * 1. 外层的for循环表示排序一共需要几轮，每轮确定一个最大值
	 * 2. 这边使用n - 1是因为，n个数，n - 1轮就可以确定每个数的位置，剩下的最后一个数不需要排序
	 */
	for(let i = 0; i < len - 1; i++ ) {
		/**
		 * 1. 内部的for循环表示每一轮排序需要比较几次
		 * 2. 因为每一轮都可以确定一个最大数，所以经过i轮后，需要排序的数只有len - i个，
		 * 再减一是因为n个数值需要n - 1次比较就可以得出结果，
		 * 所以最终只需要比较len - i - 1次
		 */
		for(let j = 0; j < len - i - 1; j++) {
			/**
			 * 主要逻辑，当前一个数大于后一个数的时候，
			 * 两个数in-place交换位置
			 */
			arr[j] > arr[j+1] && swap(arr, j, j+1)
		}
	}
	/**
	 * 因为是原地排序，所以返回原来的数组
	 */
	return arr
}

module.exports = bubbleSort