# is-roughly-equal ❓

**Check if a number is within a certain fault tolerance to another.**

[![npm version](https://img.shields.io/npm/v/is-roughly-equal.svg)](https://www.npmjs.com/package/is-roughly-equal)
[![build status](https://img.shields.io/travis/derhuerst/is-roughly-equal.svg)](https://travis-ci.org/derhuerst/is-roughly-equal)
[![dependency status](https://img.shields.io/david/derhuerst/is-roughly-equal.svg)](https://david-dm.org/derhuerst/is-roughly-equal#info=dependencies)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/is-roughly-equal.svg)](https://david-dm.org/derhuerst/is-roughly-equal#info=devDependencies)

*is-roughly-equal* [is ISC-licensed](license.md).


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

const check = isRoughlyEqual 1, 10 // equal to 10 with tolerance of 1
check(11.1) // false
check(11)   // true
check(10)   // true
check(9)    // true
check(8.9)  // false
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/is-roughly-equal/issues).
