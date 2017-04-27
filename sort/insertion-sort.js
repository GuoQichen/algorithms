/**
 * @author acky.guo
 * @date 17/4/26
 */

function insertionSort(arr) {
	const len = arr.length
	let j = 0
	let value
	for(let i = 1; i < len; i++) {
		value = arr[i]
		for(j = i - 1; j > -1 && arr[j] > value; j-- ) {
			arr[j+1] = arr[j]
		}
		arr[++j] = value
	}
	return arr
}

module.exports = insertionSort