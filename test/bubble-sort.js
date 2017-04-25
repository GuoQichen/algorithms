
const bubbleSort = require('../sort/bubble-sort.js')
const assert = require('assert')

describe('sort', function() {
	describe('bubble', function() {
		it('sort array into ascending order with bubble-sort', function() {
			assert.deepEqual(bubbleSort([3,2,1,5,4]), [1,2,3,4,5])
		})
	})	
})
