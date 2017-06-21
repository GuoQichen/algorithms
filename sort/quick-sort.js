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

/**
 * partition是quick-sort in-place的核心逻辑，
 * 使用左右两个指针来不断和支点的值比较，如果在左边遇到大于支点的值，
 * 右边遇到比支点小的值，就原地交换两个值，最终返回左边指针的位置
 */

/**
 * partion接收的参数，arr表示要排序的数组，left表示左边指针开始的位置，
 * right表示右边指针开始的位置，因为是原地排序，所以是通过指针的形式
 */

// in-place
function partition(arr, left, right) {
	/**
	 * 因为不是原地排序，所以需要指定指针开始的位置，
	 * 然后取中点得到支点
	 */
	const pivot = arr[Math.floor((left + right)/2)]
	/**
	 * 外部循环目的是遍历数组的所有元素
	 */
	while(left <= right) {
		/**
		 * 从左边指针开始，如果指针所指的值比支点的值小，
		 * 指针就指向下一个数，直到遇到大于等于支点值的值
		 */
		while(arr[left] < pivot) {
			left++
		}
		/**
		 * 功能和上一个循环一样，但是是从右边开始，
		 * 直到遇到小于等于支点的值
		 */
		while(arr[right] > pivot) {
			right--
		}
		/**
		 * 在上面两个循环之后，如果此时左边指针的index小于等于右边指针的index，
		 * 就交换左右指针所指向的值，
		 * 然后指针移向下一个值
		 */
		if(left <= right) {
			swap(arr, left, right)
			left++
			right--
		}
	}
	/**
	 * 最后返回左边指针的index
	 */
	return left
}
function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
	let index
	if(arr.length < 2) return arr
	/**
	 * 递归逻辑是这样的，
	 * 先执行分区，然后根据返回的index来判断是否对剩下的部分继续执行分区
	 */
	index = partition(arr, left, right)
	if(left < index - 1) quickSortInPlace(arr, left, index - 1)
	if(right > index) quickSortInPlace(arr, index, right)
	/**
	 * 最后返回原来的数组
	 */
	return arr
}

module.exports = { quickSortInPlace, quickSortOutPlace }