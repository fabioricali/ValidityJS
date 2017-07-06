/**
 * @fileOverview Arrays asserts.
 * @module Array
 */

const Types = require('./types');
const Interface = require('../interface');
let Arrays = {};

/**
 * Check if an element is in the array
 *
 * **Interface**: `not`
 *
 * @param value {Mixed} element to search
 * @param array {array} array where search
 * @function
 * @name inArray
 * @return {boolean}
 * @example
 *  be.inArray('hello', ['hello', 'world']) //true
 *  be.inArray('ciao', ['hello', 'world']) //false
 *  be.inArray(1, true) //false
 *  be.not.inArray(1, true) //true
 *  be.Arrays.inArray(1, [1, 2, 3]) //true
 */
Arrays.inArray = (value, array) => {
    if(!Types.array(array)) return false;
    for(let i in array){
        if(array.hasOwnProperty(i) && array[i] === value)
            return true;
    }
    return false;
};

Arrays.inArray.multiple = false;

/**
 * Check if is an array of strings
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {array} array
 * @function
 * @name arrayOfStrings
 * @returns {*|boolean}
 * @example
 * be.arrayOfStrings(['hello', 'world']) // true
 * be.all.arrayOfStrings([
 *     ['hello', 'world'],
 *     ['ciao', 'mondo']
 * ]) // true
 */
Arrays.arrayOfStrings = (value) => {
    return Types.all.string(value);
};

/**
 * Check if is an array of objects
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name arrayOfObjects
 * @param value {array} array
 * @returns {*|boolean}
 * @example
 * be.arrayOfObjects([{a:1},{b:2}]) // true
 * be.all.arrayOfObjects([
 *      {a: 1},
 *      {b: 2},
 *      [1, 2, 3]
 * ]) // false
 */
Arrays.arrayOfObjects = (value) => {
    return Types.all.object(value);
};

/**
 * Check if is an array of booleans
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name arrayOfBooleans
 * @param value {array} array
 * @returns {*|boolean}
 * @example
 * be.arrayOfBooleans([true, false]) // true
 * be.all.arrayOfBooleans([
 *      true,
 *      false,
 *      [1, 2, 3]
 * ]) // false
 */
Arrays.arrayOfBooleans = (value) => {
    return Types.all.boolean(value);
};

/**
 * Check if is an array of numbers
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name arrayOfNumbers
 * @param value {array} array
 * @returns {*|boolean}
 * @example
 * be.arrayOfNumbers([1, 2]) // true
 * be.all.arrayOfNumbers([
 *      true,
 *      false,
 *      [1, 2, 3]
 * ]) // false
 */
Arrays.arrayOfNumbers = (value) => {
    return Types.all.number(value);
};

/**
 * Check if is an array of dates
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @function
 * @name arrayOfDates
 * @param value {array} array
 * @returns {*|boolean}
 * @example
 * be.arrayOfDates([new Date(), new Date('2017-07-06')]) // true
 * be.all.arrayOfNumbers([
 *      true,
 *      false,
 *      [new Date()]
 * ]) // false
 */
Arrays.arrayOfDates = (value) => {
    return Types.all.date(value);
};

Arrays = Interface.create(Arrays);

module.exports = Arrays;
