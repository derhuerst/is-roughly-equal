'use strict'

const test = require('tape')

const iRE = require('.')



test('unary', (t) => {
	t.plan(8)
	const u = iRE.unary(1)

	// throws if not enough args
	t.throws(() => iRE.unary())

	// returns a function
	t.equal(typeof u, 'function')

	// compares positive numbers correctly
	t.equal(u(8.9, 10), false)
	t.equal(u(9, 10), true)
	t.equal(u(10, 10), true)
	t.equal(u(11, 10), true)
	t.equal(u(11.1, 10), false)

	// compares positive & negative numbers correctly
	t.equal(u(-10, 10), false)
})

test('binary', (t) => {
	t.plan(14)
	const b1 = iRE.binary(1, 10)
	const b2 = iRE.binary(1, -10)

	// throws if not enough args
	t.throws(() => iRE.binary())
	t.throws(() => iRE.binary(1))

	// returns a function
	t.equal(typeof b1, 'function')

	// compares positive numbers correctly
	t.equal(b1(8.9), false)
	t.equal(b1(9), true)
	t.equal(b1(10), true)
	t.equal(b1(11), true)
	t.equal(b1(11.1), false)

	// compares negative numbers correctly
	t.equal(b2(-8.9), false)
	t.equal(b2(-9), true)
	t.equal(b2(-10), true)
	t.equal(b2(-11), true)
	t.equal(b2(-11.1), false)

	// compares positive & negative numbers correctly
	t.equal(b2(10), false)
})

test('ternary', (t) => {
	t.plan(15)
	const t1 = iRE.ternary

	// throws if not enough args
	t.throws(() => iRE.ternary())
	t.throws(() => iRE.ternary(1))
	t.throws(() => iRE.ternary(1, 10))

	// returns a boolean
	t.equal(typeof t1(1, 10, 9), 'boolean')

	// compares positive numbers correctly
	t.equal(t1(1, 10, 8.9), false)
	t.equal(t1(1, 10, 9), true)
	t.equal(t1(1, 10, 10), true)
	t.equal(t1(1, 10, 11), true)
	t.equal(t1(1, 10, 11.1), false)

	// compares negative numbers correctly
	t.equal(t1(1, -10, -8.9), false)
	t.equal(t1(1, -10, -9), true)
	t.equal(t1(1, -10, -10), true)
	t.equal(t1(1, -10, -11), true)
	t.equal(t1(1, -10, -11.1), false)

	// compares positive & negative numbers correctly
	t.equal(t1(1, -10, 10), false)
})

test('isRoughlyEqual curried by 0 args', (t) => {
	t.plan(6)
	const x = iRE()

	// is a function
	t.equal(typeof x, 'function')

	// uses 1 as tolerance
	t.equal(x(10, 8.9), false)
	t.equal(x(10, 9), true)
	t.equal(x(10, 10), true)
	t.equal(x(10, 11), true)
	t.equal(x(10, 11.1), false)
})

test('isRoughlyEqual curried by 1 arg', (t) => {
	t.plan(14)
	const x = iRE(1)

	// is a function
	t.equal(typeof x, 'function')

	// complains about # of args
	t.throws(() => x())
	t.throws(() => x(10))

	// compares positive numbers correctly
	t.equal(x(10, 8.9), false)
	t.equal(x(10, 9), true)
	t.equal(x(10, 10), true)
	t.equal(x(10, 11), true)
	t.equal(x(10, 11.1), false)

	// compares negative numbers correctly
	t.equal(x(-10, -8.9), false)
	t.equal(x(-10, -9), true)
	t.equal(x(-10, -10), true)
	t.equal(x(-10, -11), true)
	t.equal(x(-10, -11.1), false)

	// compares positive & negative numbers correctly
	t.equal(x(-10, 10), false)
})

test('isRoughlyEqual curried by 2 args', (t) => {
	t.plan(15)
	const x = iRE(1, 10)
	const y = iRE(1, -10)

	// is a function
	t.equal(typeof x, 'function')
	t.equal(typeof y, 'function')

	// complains about # of args
	t.throws(() => x())
	t.throws(() => y())

	// compares positive numbers correctly
	t.equal(x(8.9), false)
	t.equal(x(9), true)
	t.equal(x(10), true)
	t.equal(x(11), true)
	t.equal(x(11.1), false)

	// compares negative numbers correctly
	t.equal(y(-8.9), false)
	t.equal(y(-9), true)
	t.equal(y(-10), true)
	t.equal(y(-11), true)
	t.equal(y(-11.1), false)

	// compares positive & negative numbers correctly
	t.equal(y(10), false)
})

test('isRoughlyEqual called with 3 args', (t) => {
	t.plan(11)

	// compares positive numbers correctly
	t.equal(iRE(1, 10, 8.9), false)
	t.equal(iRE(1, 10, 9), true)
	t.equal(iRE(1, 10, 10), true)
	t.equal(iRE(1, 10, 11), true)
	t.equal(iRE(1, 10, 11.1), false)

	// compares negative numbers correctly
	t.equal(iRE(1, -10, -8.9), false)
	t.equal(iRE(1, -10, -9), true)
	t.equal(iRE(1, -10, -10), true)
	t.equal(iRE(1, -10, -11), true)
	t.equal(iRE(1, -10, -11.1), false)

	// compares positive & negative numbers correctly
	t.equal(iRE(1, -10, 10), false)
})
