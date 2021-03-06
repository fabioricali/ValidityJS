# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.1] - 2018-03-11
- **Improved** `equal`

## [2.0.0] - 2018-01-04
- **Added** `be.alpha`
- **Changed** `be.set` to `be.setAssert`
- **Changed** `be.oSet` to `be.set`

## [1.16.0] - 2017-12-21
### Added
- `be.min`
- `be.max`

## [1.14.0] - 2017-11-24
### Added
- UMD support

## [1.13.0] - 2017-09-13
### Added
- `be.arrayOfNumeric`
- `be.stringRange`
- `be.stringLength`

## [1.12.2] - 2017-08-28
### Fixed
- Print arguments in error message

## [1.12.1] - 2017-08-28
### Added
- `be.nil`, checks if value is null or undefined

## [1.11.0] - 2017-08-07
### Added
- New param `callback` to `be.err`, now is Mocha ready
- `be.of` alias of `be.classOf`

## [1.10.0] - 2017-08-03
### Added
- `be.objValueInArray`, check if is a key of an object with determined value is in array
- `be.generatorFunction`, check if is GeneratorFunction

## [1.9.0] - 2017-07-30
### Added
- `be.sha256`, check if is sha256 string
- `be.sha512`, detect if is sha512 string

## [1.8.0] - 2017-07-28
### Added
- New interface `err`. Now it's possible "throw" an error if assertion are not satisfied

## [1.7.3] - 2017-07-25
### Fixed
- TypeScript type definitions

## [1.7.2] - 2017-07-25
### Added
- TypeScript type definitions

## [1.7.1] - 2017-07-22
### Fixed
- Wrong documentation

## [1.7.0] - 2017-07-22
### Added
- `be.uuid`, detect if is UUID
- `be.uuid1`, detect if is UUID v1
- `be.uuid3`, detect if is UUID v3
- `be.uuid4`, detect if is UUID v4
- `be.uuid5`, detect if is UUID v5
- `be.isrc`, detect if is ISRC
- `be.iswc`, detect if is ISWC

## [1.6.3] - 2017-07-20
### Added
- es8 `be.asyncFunction`, detect if is async function

## [1.6.2] - 2017-07-18
- Code optimization

## [1.6.1] - 2017-07-14

### Fixed
- Wrong node.js version badge in README

### Removed
- Unused helper

## [1.6.0] - 2017-07-13

### Added
- `be.compareVersion`, compare two version
- `be.androidTablet`, detect Android tablet
- `be.androidPhone`, detect Android phone
- `be.chromeIOS`, detect Chrome on iOS
- `be.opera`, detect Opera browser
- `be.edge`, detect Edge browser
- `be.safariMobile`, detect Safari mobile browser
- `be.windowsPhone`, detect Windows Phone
- `be.windowsTablet`, detect Windows tablet
- `be.blackberry`, detect BlackBerry device
- `be.linux`, detect Linux
- `be.mobile`, detect mobile device
- `be.tablet`, detect tablet device
- `be.desktop`, detect desktop device

## [1.5.0] - 2017-07-10

### Added
- es6 `be.oSet`, Set object assertion
- es6 `be.weakSet`, WeakSet object assertion
- es6 `be.map`, Map object assertion
- es6 `be.mapIterator`, Map Iterator object assertion
- es6 `be.setIterator`, Set Iterator object assertion
- es6 `be.int8Array`, Int8Array object assertion
- es6 `be.uint8Array`, Uint8Array object assertion
- es6 `be.uint8ClampedArray`, Uint8ClampedArray object assertion
- es6 `be.int16Array`, Int16Array object assertion
- es6 `be.uint16Array`, Uint16Array object assertion
- es6 `be.int32Array`, Int32Array object assertion
- es6 `be.uint32Array`, Uint32Array object assertion
- es6 `be.float32Array`, Float32Array object assertion
- es6 `be.float64Array`, Float64Array object assertion

## [1.4.1] - 2017-07-10

### Added
- `be.set`, now it's possible add new/overwrite methods
- `be.endWith`

### Changed
- `be.startWith`, remove regex test

## [1.4.0] - 2017-07-07

### Added
- `be.symbol`
- `be.defined`
- `be.arrayOfNumbers`
- `be.arrayOfDates`
- `be.arrayOfFunctions`

### Changed
- improved `be.json`
- improved `be.buffer`
- now `be.equal` support also object and array

### Fixed
- now `be.equal` with zero negative return false
- `be.all.array` failed
- `be.any.array` failed

## [1.3.1] - 2017-07-04

### Added
- `be.primitive`
- `be.promise`
- `be.buffer`
- `be.iterable`
- `be.arrayOfBooleans`
- `be.false`
- `be.true`
    
### Changed
- now `be.booleanTrue` and `be.booleanFalse` are alias of `be.true` and `be.false`

### Fixed
- test