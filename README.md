# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @se7rgo/lotide`

**Require it:**

`const _ = require('@se7rgo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: looks for first el in array
* `tail(...)`: looks for not first el in array
* `middle(...)`: looks for middle el in array
* `countLetters(...)`: output letter count
* `countOnly(...)`: count only specified el in array
* `eqArrays(...)`: check arr equality
* `eqObjects(...)`: check obj equality
* `assertObjectsEqual(...)`: check if output of eqObjects is true
* `findKey(...)`: looking for specific key
* `findKeyByValue(...)`: looking for key by specific value
* `letterPositions(...)`: check position of specified letter
* `map(...)`: make new array based on specific callback func
* `takeUntil(...)`: take el of array until specific el
* `without(...)`: ramove specific el of an array
