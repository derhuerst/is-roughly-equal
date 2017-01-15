'use strict'

const notEnoughArgs = new Error('not enough arguments')



const nullary = _ => unary(1)

const unary = function (epsilon) {
	if (arguments.length < 1) throw notEnoughArgs
	return function (a, b) {
		if (arguments.length < 2) throw notEnoughArgs
		return ternary(epsilon, a, b)
	}
}

const binary = function (epsilon, a) {
	if (arguments.length < 2) throw notEnoughArgs
	return function (b) {
		if (arguments.length < 1) throw notEnoughArgs
		return ternary(epsilon, a, b)
	}
}

const ternary = function (epsilon, a, b) {
	if (arguments.length < 3) throw notEnoughArgs
	return Math.abs(b - a) <= epsilon
}

const arities = [nullary, unary, binary, ternary]
const auto = function (epsilon, a, b) {
	return arities[arguments.length](epsilon, a, b)
}



module.exports = Object.assign(auto, {ternary, binary, unary})
