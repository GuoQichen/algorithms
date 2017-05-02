
const assert = require('assert')
const swap = require('../sort/swap')
const bubbleSort = require('../sort/bubble-sort')
const selectionSort = require('../sort/selection-sort')
const insertionSort = require('../sort/insertion-sort')
const { mergeSort, merge } = require('../sort/merge-sort')
const { quickSortInPlace, quickSortOutPlace } = require('../sort/quick-sort')

describe('sort algorithms', function() {
	describe('utils', function() {
		describe('swap', function() {
			it('swap change array item place', function() {
				const testCase = [1, 2, 3]
				swap(testCase, 0, 2)
				assert.deepEqual(testCase, [3,2,1])
			})

			it('array index out of range', function() {
				const testCase = [1, 2, 3]
				assert.throws(() => {
					swap(testCase, 4, 4)
				}, /index out of range/)
			})
		})

		describe('merge', function() {
			it('merge two array of ordered to one', function() {
				assert.deepEqual(merge([1,2,3], [4,5]), [1,2,3,4,5])
			})
		})
	})


	describe('sort function', function() {
		let testCase
		beforeEach('reset testCase',function() {
		 	// testCase = [3, 2, 1, 5, 4]
		 	testCase = [0, 99, 4, 101,345, 55, 3, 7,13, 0, 1,3]
		})		
		const suits = [
			{name: 'bubble-sort', fn: bubbleSort },
			{name: 'selection-sort', fn: selectionSort },
			{name: 'insertion-sort', fn: insertionSort },
			{name: 'merge-sort', fn: mergeSort },
			{name: 'quickSortInPlace', fn: quickSortInPlace },
			{name: 'quickSortOutPlace', fn: quickSortOutPlace}
		]

		suits.forEach(({ name, fn }) => {
			it(`sort array into ascending order with ${name}`, function() {
				assert.deepEqual(fn(testCase), [ 0, 0, 1, 3, 3, 4, 7, 13, 55, 99, 101, 345 ])
			})
		})
	})
})
