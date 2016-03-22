iRE = require './index.js'



module.exports =

	'unary':

		'throws an error if not enough args': (t) ->
			t.expect 2
			t.throws ->       iRE.unary()
			t.doesNotThrow -> iRE.unary 1
			t.done()

		'returns a function': (t) ->
			t.expect 1
			t.strictEqual typeof iRE.unary(1), 'function'
			t.done()

		'compares positive numbers correctly': (t) ->
			x = iRE.unary 1
			t.expect 5
			t.strictEqual x(8.9,  10), false
			t.strictEqual x(9,    10), true
			t.strictEqual x(10,   10), true
			t.strictEqual x(11,   10), true
			t.strictEqual x(11.1, 10), false
			t.done()

		'compares negative numbers correctly': (t) ->
			x = iRE.unary 1
			t.expect 5
			t.strictEqual x(-8.9,  -10), false
			t.strictEqual x(-9,    -10), true
			t.strictEqual x(-10,   -10), true
			t.strictEqual x(-11,   -10), true
			t.strictEqual x(-11.1, -10), false
			t.done()

		'compares a positive & a negative number correctly': (t) ->
			x = iRE.unary 1
			t.expect 1
			t.strictEqual x(-10, 10), false
			t.done()



	'binary':

		'throws an error if not enough args': (t) ->
			t.expect 3
			t.throws ->       iRE.binary()
			t.throws ->       iRE.binary 1
			t.doesNotThrow -> iRE.binary 1, 10
			t.done()

		'returns a function': (t) ->
			t.expect 1
			t.strictEqual typeof iRE.binary(1, 10), 'function'
			t.done()

		'compares positive numbers correctly': (t) ->
			x = iRE.binary 1, 10
			t.expect 5
			t.strictEqual x(8.9),  false
			t.strictEqual x(9),    true
			t.strictEqual x(10),   true
			t.strictEqual x(11),   true
			t.strictEqual x(11.1), false
			t.done()

		'compares negative numbers correctly': (t) ->
			x = iRE.binary 1, -10
			t.expect 5
			t.strictEqual x(-8.9),  false
			t.strictEqual x(-9),    true
			t.strictEqual x(-10),   true
			t.strictEqual x(-11),   true
			t.strictEqual x(-11.1), false
			t.done()

		'compares a positive & a negative number correctly': (t) ->
			x = iRE.binary 1, -10
			t.expect 1
			t.strictEqual x(10), false
			t.done()



	'ternary':

		'throws an error if not enough args': (t) ->
			t.expect 4
			t.throws ->       iRE.ternary()
			t.throws ->       iRE.ternary 1
			t.throws ->       iRE.ternary 1, 10
			t.doesNotThrow -> iRE.ternary 1, 10, 9
			t.done()

		'compares positive numbers correctly': (t) ->
			x = iRE.ternary
			t.expect 5
			t.strictEqual x(1, 10, 8.9),  false
			t.strictEqual x(1, 10, 9),    true
			t.strictEqual x(1, 10, 10),   true
			t.strictEqual x(1, 10, 11),   true
			t.strictEqual x(1, 10, 11.1), false
			t.done()

		'compares negative numbers correctly': (t) ->
			x = iRE.ternary
			t.expect 5
			t.strictEqual x(1, -10, -8.9),  false
			t.strictEqual x(1, -10, -9),    true
			t.strictEqual x(1, -10, -10),   true
			t.strictEqual x(1, -10, -11),   true
			t.strictEqual x(1, -10, -11.1), false
			t.done()

		'compares a positive & a negative number correctly': (t) ->
			t.expect 1
			t.strictEqual iRE.ternary(1, -10, 10), false
			t.done()



	'isRoughlyEqual':

		'curried by 1 arg':

			'is a function': (t) ->
				t.expect 1
				t.strictEqual typeof iRE(1), 'function'
				t.done()

			'complains about # of args': (t) ->
				x = iRE 1
				t.expect 3
				t.throws ->       x()
				t.throws ->       x 10
				t.doesNotThrow -> x 10, 10
				t.done()

			'works with positive numbers': (t) ->
				x = iRE 1
				t.expect 5
				t.strictEqual x(10, 8.9),  false
				t.strictEqual x(10, 9),    true
				t.strictEqual x(10, 10),   true
				t.strictEqual x(10, 11),   true
				t.strictEqual x(10, 11.1), false
				t.done()

			'works with negative numbers': (t) ->
				x = iRE 1
				t.expect 5
				t.strictEqual x(-10, -8.9),  false
				t.strictEqual x(-10, -9),    true
				t.strictEqual x(-10, -10),   true
				t.strictEqual x(-10, -11),   true
				t.strictEqual x(-10, -11.1), false
				t.done()

			'compares a positive & a negative number correctly': (t) ->
				t.expect 1
				t.strictEqual iRE(1)(-10, 10), false
				t.done()



		'curried by 2 args':

			'is a function': (t) ->
				t.expect 1
				t.strictEqual typeof iRE(1, 10), 'function'
				t.done()

			'complains about # of args': (t) ->
				x = iRE 1, 10
				t.expect 2
				t.throws ->       x()
				t.doesNotThrow -> x 10
				t.done()

			'works with positive numbers': (t) ->
				x = iRE 1, 10
				t.expect 5
				t.strictEqual x(8.9),  false
				t.strictEqual x(9),    true
				t.strictEqual x(10),   true
				t.strictEqual x(11),   true
				t.strictEqual x(11.1), false
				t.done()

			'works with negative numbers': (t) ->
				x = iRE 1, -10
				t.expect 5
				t.strictEqual x(-8.9),  false
				t.strictEqual x(-9),    true
				t.strictEqual x(-10),   true
				t.strictEqual x(-11),   true
				t.strictEqual x(-11.1), false
				t.done()

			'compares a positive & a negative number correctly': (t) ->
				t.expect 1
				t.strictEqual iRE(1, -10)(10), false
				t.done()



		'with by 3 args':

			'works with positive numbers': (t) ->
				t.expect 5
				t.strictEqual iRE(1, 10, 8.9),  false
				t.strictEqual iRE(1, 10, 9),    true
				t.strictEqual iRE(1, 10, 10),   true
				t.strictEqual iRE(1, 10, 11),   true
				t.strictEqual iRE(1, 10, 11.1), false
				t.done()

			'works with negative numbers': (t) ->
				t.expect 5
				t.strictEqual iRE(1, -10, -8.9),  false
				t.strictEqual iRE(1, -10, -9),    true
				t.strictEqual iRE(1, -10, -10),   true
				t.strictEqual iRE(1, -10, -11),   true
				t.strictEqual iRE(1, -10, -11.1), false
				t.done()

			'compares a positive & a negative number correctly': (t) ->
				t.expect 1
				t.strictEqual iRE(1, -10, 10), false
				t.done()
