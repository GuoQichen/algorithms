module.exports = function swap(arr, i, j) {
	const len = arr.length
	if(i > len) i = len - 1
	if(j > len) j = len - 1
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}