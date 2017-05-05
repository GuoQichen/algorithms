const assert = require('assert')
const b = require('../binary-search-tree')

describe('binary-search-tree function', function() {
	beforeEach('reset binary-search-tree root node to null', function() {
		b._root = null
	})
	it('#b.contains()', function() {
		assert(!b.contains(1))
		b.add(1)
		assert(b.contains(1))
	})
	describe('#b.add()', function() {
		it('add one value', function() {
			assert(b._root === null)
			b.add(1)
			assert.deepEqual(b._root, {
				value: 1,
				left: null,
				right: null
			})
		})
		it('add multiple value', function() {
			assert(b._root === null)
			b.add([2, 3])
			assert(b.contains(2) && b.contains(3))
		})
	})
	describe('#b.size()', function() {
		it('should throw error if root element is null', function() {
			assert.throws(() => {
				b.size()
			}, /root element is null/)
		})
		it('size() return amount of value', function() {
			b.add(1)
			assert.equal(b.size(), 1)
			b.add([2, 3])
			assert.equal(b.size(), 3)
		})
		
	})
	it('#b.toArray()', function() {
		b.add([1, 2, 3])
		assert.deepEqual(b.toArray(), [1, 2, 3])
	})
	it('#b.toString()', function() {
		b.add([1, 2, 3])
		assert(b.toString() === '1,2,3')
	})
	it('#b.remove()')
})