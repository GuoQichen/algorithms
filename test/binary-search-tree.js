const assert = require('assert')
const b = require('../binary-search-tree')

describe('binary-search-tree function', function () {
	beforeEach('reset binary-search-tree root node to null', function () {
		b._root = null
	})
	it('#b.contains()', function () {
		assert(!b.contains(1))
		b.add(1)
		assert(b.contains(1))
	})
	describe('#b.add()', function () {
		it('add one value', function () {
			assert(b._root === null)
			b.add(1)
			assert.deepEqual(b._root, {
				value: 1,
				left: null,
				right: null
			})
		})
		it('add multiple value', function () {
			assert(b._root === null)
			b.add([2, 3])
			assert(b.contains(2) && b.contains(3))
		})
	})
	it('#b.size()', function () {
		b.add(1)
		assert.equal(b.size(), 1)
		b.add([2, 3])
		assert.equal(b.size(), 3)
	})
	it('#b.toArray()', function () {
		b.add([1, 2, 3])
		assert.deepEqual(b.toArray(), [1, 2, 3])
	})
	it('#b.toString()', function () {
		b.add([1, 2, 3])
		assert(b.toString() === '1,2,3')
	})
	describe('#b.remove()', function () {
		beforeEach('add init element to binary-search-tree', function () {
			b.add([10, 7, 5, 9, 8, 15])
			/**
			 * test tree instance
			 * 
			 * 				10
			 * 			  |	   |
			 * 			7		15
			 * 	      |   |
			 * 		5		9
			 * 			  |
			 * 			8
			 */
		})
		it('remove root element with two children', function () {
			assert(b.size(), 5)
			b.remove(10)
			assert(b.size(), 4)
			assert.deepEqual(b._root, {
				value: 9,
				left: {
					value: 7,
					left: {
						value: 5,
						left: null,
						right: null
					},
					right: {
						value: 8,
						left: null,
						right: null
					}
				},
				right: {
					value: 15,
					left: null,
					right: null
				}
			})
		})
		it('remove normal element with two children and repalcemenet is first child', function () {
			assert(b.size(), 5)
			b.remove(7)
			assert(b.size(), 4)
			assert.deepEqual(b._root, {
				value: 10,
				left: {
					value: 5,
					left: null,
					right: {
						value: 9,
						left: {
							value: 8,
							left: null,
							right: null
						},
						right: null
					}
				},
				right: {
					value: 15,
					left: null,
					right: null
				}
			})
		})
		it('remove normal element with two children and replacement isn\'t first child', function () {
			b.add([3, 6]) // just for test replacement isn't first child
			assert(b.size(), 7)
			b.remove(7)
			assert.deepEqual(b.toArray(), [3, 5, 6, 8, 9, 10, 15])
		})
		it('remove leaf node', function () {
			b.remove(5)
			assert(b.size(), 5)
			assert.deepEqual(b.toArray(), [7, 8, 9, 10, 15])
		})
		it('remove node with one child', function () {
			b.remove(9)
			assert(b.size(), 5)
			assert.deepEqual(b.toArray(), [5, 7, 8, 10, 15])
		})
		it('remove node with no child', function () {
			b.remove(15)
			assert(b.size(), 5)
			assert.deepEqual(b.toArray(), [5, 7, 8, 9, 10])
		})
		it('remove root element with one chile', function () {
			b._root = null
			assert.strictEqual(b.size(), 0) // can's use equal(==), because 0 will be turn to falsy
			b.add([10, 3]) // set binary-search-tree just two element, root element is 10, this._root.left === 3
			assert(b.size(), 2)
			assert.deepEqual(b.toArray(), [3, 10])
			b.remove(10) // remove root element 
			assert.deepEqual(b.toArray(), [3])
		})
	})
})