'use strict'

const notEnoughArgs = new Error('not enough arguments')



const nullary = _ => unary(1)

const unary = function (tolerance) {
	if (arguments.length < 1) throw notEnoughArgs
	return function (a, b) {
		if (arguments.length < 2) throw notEnoughArgs
		return Math.abs(b - a) <= tolerance
	}
}

const binary = function (tolerance, a) {
	if (arguments.length < 2) throw notEnoughArgs
	return function (b) {
		if (arguments.length < 1) throw notEnoughArgs
		return Math.abs(b - a) <= tolerance
	}
}

const ternary = function (tolerance, a, b) {
	if (arguments.length < 3) throw notEnoughArgs
	return Math.abs(b - a) <= tolerance
}

const arities = [nullary, unary, binary, ternary]
const auto = function (tolerance, a, b) {
	return arities[arguments.length](tolerance, a, b)
}



module.exports = Object.assign(auto, {ternary, binary, unary})
