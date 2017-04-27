module.exports = function swap(arr, i, j) {
	if(!arr[i] || !arr[j]) throw new Error(`index out of range, can't find match item`)
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}