const assert = require('assert')
const l = require('../linked-list')

describe('linked-list function', function () {
    const populateList = () => {
        l.add('one')
        l.add('two')
        l.add('three')
    }
    
    beforeEach('reset linked-list', function () {
        l._head = null
        l._length = 0
    })

    it('#add()', function () {
        assert.strictEqual(l.size(), 0)
        populateList()
        assert(l.size(), 3)
    })

    it('#items()', function () {
        populateList()
        assert(l.items(0), 'one') // index start from 0
        assert(l.items(2), 'three')
        assert.strictEqual(l.items(3), null)
        assert.strictEqual(l.items(-1), null)
    })
    
    describe('#remove()', function () {
        beforeEach('add node', function () {
            populateList()
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
        populateList()
        assert(l.size(), 3)
    })

    it('#toArray', function () {
        populateList()
        assert.deepEqual(l.toArray(), ['one', 'two', 'three'])
    })

    it('#toString', function () {
        populateList()
        assert(l.toString(), 'one,two,three')
    })
})