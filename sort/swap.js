module.exports = function swap(arr, i, j) {
	if(arr[i] === void 0 || arr[j] === void 0) throw new Error(`index out of range, can't find match item`)
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}