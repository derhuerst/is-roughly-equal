# is-roughly-equal ❓

**Check if a number is within a certain epsilon to another.** [Supports currying](#api).

[![npm version](https://img.shields.io/npm/v/is-roughly-equal.svg)](https://www.npmjs.com/package/is-roughly-equal)
[![build status](https://img.shields.io/travis/derhuerst/is-roughly-equal.svg)](https://travis-ci.org/derhuerst/is-roughly-equal)
[![dependency status](https://img.shields.io/david/derhuerst/is-roughly-equal.svg)](https://david-dm.org/derhuerst/is-roughly-equal#info=dependencies)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/is-roughly-equal.svg)](https://david-dm.org/derhuerst/is-roughly-equal#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/is-roughly-equal.svg)

*is-roughly-equal* is [well-tested](test.js).


## Installing

```
npm install is-roughly-equal
```


## Usage

```js
const isRoughlyEqual = require 'is-roughly-equal'

// without currying
isRoughlyEqual(11.1) // false
isRoughlyEqual(11)   // true
isRoughlyEqual(10)   // true
isRoughlyEqual(9)    // true
isRoughlyEqual(8.9)  // false

const check = isRoughlyEqual(1, 10) // equal to 10 with epsilon of 1
check(11.1) // false
check(11)   // true
check(10)   // true
check(9)    // true
check(8.9)  // false
```


## API

### `isRoughlyEqual([epsilon], [a], [b])`

- Called **without arguments**, returns `isRoughlyEqual.unary(1)`.
- Called **with 1 arguments** `epsilon`, returns `isRoughlyEqual.unary(epsilon)`
- Called **with 2 arguments** `epsilon` and `a`, returns `isRoughlyEqual.binary(epsilon, a)`.
- Called **with 3 arguments** `epsilon`, `a` and `b`, returns `isRoughlyEqual.ternary(epsilon, a, b)`.

### `isRoughlyEqual.unary(epsilon)`

Returns a function `(a, b) => isRoughlyEqual.ternary(epsilon, a, b)`.

### `isRoughlyEqual.binary(epsilon, a)`

Returns a function `(b) => isRoughlyEqual.ternary(epsilon, a, b)`.

### `isRoughlyEqual.ternary(epsilon, a, b)`

Returns `true` of `false`. **Checks if `a` is within a distance of `epsilon` to `b`.**


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/is-roughly-equal/issues).
