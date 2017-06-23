const assert = require('assert')
const l = require('../doubly-linked-list')

describe('doubly-linked-list function', function () {
    const populateList = () => {
        l.add('one')
        l.add('two')
        l.add('three')
    }

    beforeEach('clear list', function () {
        l._head = null
        l._tail = null
        l._length = 0
    })

    it('#add', function () {
        assert.strictEqual(l.size(), 0)
        populateList()
        assert(l.size(), 3)
        assert.deepEqual(l.toArray(), ['one', 'two', 'three'])
    })

    it('#items', function () {
        populateList()
        assert(l.items(0), 'one')
        assert(l.items(2), 'three')
        assert.strictEqual(l.items(3), undefined)
    })

    describe('#remove', function () {
        it('remove node when only one node', function () {
            l.add('one')
            l.remove(0)
            assert.strictEqual(l._head, null)
            assert.strictEqual(l._tail, null)
            assert.strictEqual(l.size(), 0)
        })

        it('remove first node', function () {
            populateList()
            const oldHead = l._head
            l.remove(0)
            assert.strictEqual(l._head, oldHead.next)
            assert(l.size(), 2)
        })

        it('remove last node', function () {
            populateList()
            const oldTail = l._tail
            l.remove(l._length - 1)
            assert.strictEqual(l._tail, oldTail.prev)
            assert(l.size(), 2)
        })
    })
    
    it('#size', function () {
        assert.strictEqual(l.size(), 0)
        populateList()
        assert.strictEqual(l.size(), 3)
    })

    it('#toArray', function () {
        assert.deepEqual(l.toArray(), [])
        populateList()
        assert.deepEqual(l.toArray(), ['one', 'two', 'three'])
    })

    it('#toString', function () {
        assert.strictEqual(l.toString(), '')
        populateList()
        assert(l.toString(), 'one,two,three')
    })
})