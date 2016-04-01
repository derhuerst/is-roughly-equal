#!/usr/bin/env node
'use strict'

const isRoughlyEqual = require('./index')
const Benchmark      = require('benchmark')

const suite = new Benchmark.Suite()



let x0 = isRoughlyEqual()
let x1 = isRoughlyEqual(1)
let x2 = isRoughlyEqual(1, 10)
suite



.add('curried with 0 args', () => {
	x0( 9.5,   10)
	x0( 10,    10)
	x0( 10.5,  10)
	x0(-9.5,  -10)
	x0(-10,   -10)
	x0(-10.5, -10)
})

.add('curried with 1 arg', () => {
	x1( 9.5,   10)
	x1( 10,    10)
	x1( 10.5,  10)
	x1(-9.5,  -10)
	x1(-10,   -10)
	x1(-10.5, -10)
})

.add('curried with 2 args', () => {
	x2( 9.5)
	x2( 10)
	x2( 10.5)
	x2(-9.5)
	x2(-10)
	x2(-10.5)
})

.add('called with 3 args', () => {
	isRoughlyEqual(1,  9.5,   10)
	isRoughlyEqual(1,  10,    10)
	isRoughlyEqual(1,  10.5,  10)
	isRoughlyEqual(1, -9.5,  -10)
	isRoughlyEqual(1, -10,   -10)
	isRoughlyEqual(1, -10.5, -10)
})



.on('cycle', (e) => console.log(e.target.toString()))
.run({async: true})
