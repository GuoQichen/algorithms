
const assert = require('assert')
const swap = require('../sort/swap')
const bubbleSort = require('../sort/bubble-sort')
const selectionSort = require('../sort/selection-sort')
const insertionSort = require('../sort/insertion-sort')
const { mergeSort, merge } = require('../sort/merge-sort')

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
		const testCase = [3, 2, 1, 5, 4]
		const result = [1, 2, 3, 4, 5]
		const suits = [
			{name: 'bubble-sort', testCase: [...testCase], fn: bubbleSort },
			{name: 'selection-sort', testCase: [...testCase], fn: selectionSort },
			{name: 'insertion-sort', testCase: [...testCase], fn: insertionSort },
			{name: 'merge-sort', testCase: [...testCase], fn: mergeSort },		
		]

		suits.forEach(({ name, testCase, fn }) => {
			describe(`${name}`, function() {
				it(`sort array into ascending order with ${name}`, function() {
					assert.deepEqual(fn(testCase), result)
				})
			})
		})
	})
})
