/**
 * @author acky.guo
 * @date 17/4/27
 */

/**
 * 归并排序，不断拆分数组，直到只有一个数的时候，
 * 然后把两个排序好的数组合并成一个，直到整个数组排序完成
 */

/**
 * 合并数组的逻辑，两个数组个取出一个数来比较，小的push到结果数组中，
 * 最终把两个分开的部分合并成一个排序好的数组
 */
function merge(left, right) {
	const result = []
	let i = 0
	let j = 0
	while(i < left.length && j < right.length) {
		/**
		 * 这边使用了后置++，表示先计算表达式再改变变量的值，只是一种简写，
		 * 合并的核心逻辑，两个排序好的数组不断取出数来比较，最终合并成一个
		 */
		result.push(left[i] < right[j] ? left[i++] : right[j++])
	}

	/**
	 * 这边使用concat是因为，上面while循环结束的条件是其中一个数组的所有数都比过了，
	 * 那么只要把另一个剩下的数组拼接到后面就可以了，
	 * 还有这里不需要关心顺序，因为必定有一个数组是空的，不会产生影响
	 */
	return result.concat(left.slice(i)).concat(right.slice(j))
}

function mergeSort(arr) {
	const len = arr.length
	if(len < 2) return arr
	const middle = Math.floor(len/2)
	/**
	 * 把数组按照middle复制成两部分，然后把这两部分不断去拆分
	 */
	const left = arr.slice(0, middle)
	const right = arr.slice(middle)
	/**
	 * 使用splice(0, len)可以用来清空数组，然后使用spread把合并好数组填充进来
	 */
	arr.splice(0, len, ...merge(mergeSort(left), mergeSort(right)))
	/**
	 * 返回的还是原来的数组，还是in-place的排序
	 */
	return arr
}

module.exports = { mergeSort, merge }