const assert = require('assert')
const b = require('../binary-search-tree')

describe('binary-search-tree functional', function() {
	beforeEach('reset binary-search-tree root node to null', function() {
		b._root = null
	})
	it('#b.contains()', function() {
		assert(!b.contains(1))
		b.add(1)
		assert(b.contains(1))
	})
	it('#b.add()', function() {
		assert(b._root === null)
		b.add(1)
		assert.deepEqual(b._root, {
			value: 1,
			left: null,
			right: null
		})
	})
	it('#b.size()', function() {
		assert.throws(() => {
			b.size()
		}, /root element is null/)
		b.add(1)
		assert.equal(b.size(), 1)
		b.add(2)
		b.add(3)
		assert.equal(b.size(), 3)
	})
	it('#b.toArray()', function() {
		b.add(1)
		b.add(2)
		b.add(3)
		const arr = b.toArray()
		assert.deepEqual(arr, [1, 2, 3])
	})
	it('#b.toString()', function() {
		b.add(1)
		b.add(2)
		b.add(3)
		const str = b.toString()
		assert(str === '1,2,3')
	})
	it('#b.remove()')
})