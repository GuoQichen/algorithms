
const assert = require('assert')
const bubbleSort = require('../sort/bubble-sort.js')
const selectionSort = require('../sort/selection-sort.js')
const insertionSort = require('../sort/insertion-sort.js')

describe('sort', function() {
	const testCase = [3, 2, 1, 5, 4]
	const result = [1, 2, 3, 4, 5]
	const suits = [
		{name: 'bubble-sort', testCase: [...testCase], fn: bubbleSort },
		{name: 'selection-sort', testCase: [...testCase], fn: selectionSort },
		{name: 'insertion-sort', testCase: [...testCase], fn: insertionSort },
	]

	suits.forEach(({ name, testCase, fn }) => {
		describe(`${name}`, function() {
			it(`sort array into ascending order with ${name}`, function() {
				assert.deepEqual(fn(testCase), result)
			})
		})
	})
})
