const assert = require('assert')
const l = require('../linked-list')

describe('linked-list function', function () {
    beforeEach('reset linked-list', function () {
        l._head = null
        l._length = 0
    })

    it('#add()', function () {
        assert.strictEqual(l._length, 0)
        l.add(1)
        assert(l._length, 1)
    })

    it('#items()', function () {
        l.add(1)
        l.add(2)
        l.add(3)
        assert(l.items(0), 1) // index start from 0
        assert(l.items(1), 2) 
        assert(l.items(2), 3)
        assert.strictEqual(l.items(3), null)
        assert.strictEqual(l.items(-1), null)
    })
    
    describe('#remove()', function () {
        beforeEach('add node', function () {
            l.add('one')
            l.add('two')
            l.add('three')
        })
        it('remove head node', function () {
            assert(l.size(), 3)
            assert(l.items(0), 'one')
            assert(l.remove(0), 'one')
            assert(l.size(), 2)
            assert(l.items(0), 'two')
        })

        it('remove normal node', function () {
            assert(l.size(), 3)
            assert(l.items(1), 'two')
            assert(l.remove(1), 'two')
            assert(l.size(), 2)
            assert(l.items(1), 'three')
        })
    })

    it('#size()', function () {
        assert.strictEqual(l.size(), 0)
        l.add('hello')
        l.add('world')
        assert(l.size(), 2)
    })

    it('#toArray', function () {
        l.add('one')
        l.add('two')
        l.add('three')
        assert.deepEqual(l.toArray(), ['one', 'two', 'three'])
    })

    it('#toString', function () {
        l.add('one')
        l.add('two')
        assert(l.toString(), 'one,two')
    })
})