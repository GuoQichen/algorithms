/**
 * @author acky.guo
 * @date 17/4/26
 */

/**
 * 插入排序把数组分成两部分，排序好的和未排序的，
 * 然后每轮排序从未排序的数组中取出第一项，在排序好的数组中找到合适的位置插入
 */
function insertionSort(arr) {
	const len = arr.length
	/**
	 * 因为要插入的位置j要在循环外访问，所以提前声明
	 */
	let j
	/**
	 * value用来保存每一轮要排序的数
	 */
	let value
	/**
	 * 因为把第一个数当成排序好的数组，所以排序从第二个数开始，index也就是1
	 */
	for(let i = 1; i < len; i++) {
		/**
		 * 把未排序的第一个数拿出来当成本轮要排序的数
		 */
		value = arr[i]
		/**
		 * 核心逻辑，从排序好的部分的最后一个数开始，
		 * 不断往前比较，如果要排序的数比当前的数小，则往前继续比较，
		 * 这里的i是未排序好的部分的第一个数，
		 * 所以i - 1表示的就是排序好的部分的最后一个数，
		 */
		for(j = i - 1; j > -1 && arr[j] > value; j-- ) {
			/**
			 * 在比较的时候，每次把排序好的数往后移，空出位置放要排序的数，
			 * 因为要排序的数一开始已经使用value保存起来了，所以排序好的数可以不断往后移
			 */
			arr[j+1] = arr[j]
		}
		/**
		 * 当循环完以后即找到了要插入的位置，所以把value放在那个位置上，
		 * 这边使用了前置++是因为，在循环中，不管有没有找到都会j--，就算是找到了也一样，
		 * 所以需要把j加回来
		 */
		arr[++j] = value
	}
	return arr
}

module.exports = insertionSort