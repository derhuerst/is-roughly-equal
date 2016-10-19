'use strict'

const a = require('assert')

const iRE = require('.')



// unary
const t1 = () => {
	const u = iRE.unary(1)

	// throws if not enough args
	a.throws(() => iRE.unary())

	// returns a function
	a.strictEqual(typeof u, 'function')

	// compares positive numbers correctly
	a.strictEqual(u(  8.9, 10), false)
	a.strictEqual(u(  9,   10), true)
	a.strictEqual(u( 10,   10), true)
	a.strictEqual(u( 11,   10), true)
	a.strictEqual(u(11.1,  10), false)

	// compares positive & negative numbers correctly
	a.strictEqual(u(-10,  10), false)

}
t1()



// binary
const t2 = () => {
	const b1 = iRE.binary(1, 10)
	const b2 = iRE.binary(1, -10)

	// throws if not enough args
	a.throws(() => iRE.binary())
	a.throws(() => iRE.binary(1))

	// returns a function
	a.strictEqual(typeof b1, 'function')

	// compares positive numbers correctly
	a.strictEqual(b1( 8.9), false)
	a.strictEqual(b1( 9  ), true)
	a.strictEqual(b1(10  ), true)
	a.strictEqual(b1(11  ), true)
	a.strictEqual(b1(11.1), false)

	// compares negative numbers correctly
	a.strictEqual(b2( -8.9), false)
	a.strictEqual(b2( -9  ), true)
	a.strictEqual(b2(-10  ), true)
	a.strictEqual(b2(-11  ), true)
	a.strictEqual(b2(-11.1), false)

	// compares positive & negative numbers correctly
	a.strictEqual(b2(10), false)

}
t2()



// ternary
const t3 = () => {
	const t = iRE.ternary

	// throws if not enough args
	a.throws(() => iRE.ternary())
	a.throws(() => iRE.ternary(1))
	a.throws(() => iRE.ternary(1, 10))

	// returns a boolean
	a.strictEqual(typeof t(1, 10, 9), 'boolean')

	// compares positive numbers correctly
	a.strictEqual(t(1, 10,  8.9), false)
	a.strictEqual(t(1, 10,  9  ), true)
	a.strictEqual(t(1, 10, 10  ), true)
	a.strictEqual(t(1, 10, 11  ), true)
	a.strictEqual(t(1, 10, 11.1), false)

	// compares negative numbers correctly
	a.strictEqual(t(1, -10,  -8.9), false)
	a.strictEqual(t(1, -10,  -9  ), true)
	a.strictEqual(t(1, -10, -10  ), true)
	a.strictEqual(t(1, -10, -11  ), true)
	a.strictEqual(t(1, -10, -11.1), false)

	// compares positive & negative numbers correctly
	a.strictEqual(t(1, -10, 10), false)

}
t3()



// isRoughlyEqual curried by 0 args
const t4 = () => {
	const x = iRE()

	// is a function
	a.strictEqual(typeof x, 'function')

	// uses 1 as tolerance
	a.strictEqual(x(10,  8.9), false)
	a.strictEqual(x(10,  9  ), true)
	a.strictEqual(x(10, 10  ), true)
	a.strictEqual(x(10, 11  ), true)
	a.strictEqual(x(10, 11.1), false)

}
t4()



// isRoughlyEqual curried by 1 arg
const t5 = () => {
	const x = iRE(1)

	// is a function
	a.strictEqual(typeof x, 'function')

	// complains about # of args
	a.throws(() => x())
	a.throws(() => x(10))

	// compares positive numbers correctly
	a.strictEqual(x(10,  8.9), false)
	a.strictEqual(x(10,  9  ), true)
	a.strictEqual(x(10, 10  ), true)
	a.strictEqual(x(10, 11  ), true)
	a.strictEqual(x(10, 11.1), false)

	// compares negative numbers correctly
	a.strictEqual(x(-10,  -8.9), false)
	a.strictEqual(x(-10,  -9  ), true)
	a.strictEqual(x(-10, -10  ), true)
	a.strictEqual(x(-10, -11  ), true)
	a.strictEqual(x(-10, -11.1), false)

	// compares positive & negative numbers correctly
	a.strictEqual(x(-10, 10), false)

}
t5()



// isRoughlyEqual curried by 2 args
const t6 = () => {
	const x = iRE(1,  10)
	const y = iRE(1, -10)

	// is a function
	a.strictEqual(typeof x, 'function')
	a.strictEqual(typeof y, 'function')

	// complains about # of args
	a.throws(() => x())
	a.throws(() => y())

	// compares positive numbers correctly
	a.strictEqual(x( 8.9), false)
	a.strictEqual(x( 9  ), true)
	a.strictEqual(x(10  ), true)
	a.strictEqual(x(11  ), true)
	a.strictEqual(x(11.1), false)

	// compares negative numbers correctly
	a.strictEqual(y( -8.9), false)
	a.strictEqual(y( -9  ), true)
	a.strictEqual(y(-10  ), true)
	a.strictEqual(y(-11  ), true)
	a.strictEqual(y(-11.1), false)

	// compares positive & negative numbers correctly
	a.strictEqual(y(10), false)

}
t6()



// isRoughlyEqual called with 3 args

// compares positive numbers correctly
a.strictEqual(iRE(1, 10,  8.9), false)
a.strictEqual(iRE(1, 10,  9  ), true)
a.strictEqual(iRE(1, 10, 10  ), true)
a.strictEqual(iRE(1, 10, 11  ), true)
a.strictEqual(iRE(1, 10, 11.1), false)

// compares negative numbers correctly
a.strictEqual(iRE(1, -10,  -8.9), false)
a.strictEqual(iRE(1, -10,  -9  ), true)
a.strictEqual(iRE(1, -10, -10  ), true)
a.strictEqual(iRE(1, -10, -11  ), true)
a.strictEqual(iRE(1, -10, -11.1), false)

// compares positive & negative numbers correctly
a.strictEqual(iRE(1, -10, 10), false)
