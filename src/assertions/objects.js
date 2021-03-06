/**
 * @fileOverview Objects checks.
 * @module Objects
 */

const Types = require('./types');
const Interface = require('../interface');
let Objects = {};

/**
 * Check if is a property of an object
 *
 * **Interfaces**: `not`, `err`
 *
 * @function
 * @name propertyOf
 * @param value {Mixed} property that you want to search
 * @param object {Object} object target
 * @returns {boolean}
 * @example
 * be.propertyOf('firstName', {firstName: 'Teddy', lastName: 'Red'}) // true
 */
Objects.propertyOf = (value, object) => {
    if(!Types.object(object)) return false;
    return object.hasOwnProperty(value);
};

Objects.propertyOf.multiple = false;

/**
 * Count properties of an object
 *
 * **Interfaces**: `not`, `err`
 *
 * @function
 * @name propertyCount
 * @param object {Object} object
 * @param value {Integer} count
 * @returns {boolean}
 * @example
 * be.propertyCount({a: 1, b: 2, c: 3}, 3) // true
 */
Objects.propertyCount = (object, value) => {
    if(!Types.object(object) || !Types.number(value)) return false;
    let n = 0;
    for(let i in object){
        if(object.hasOwnProperty(i) && ++n > value)
            return false;
    }
    return n === value;
};

Objects.propertyCount.multiple = false;

Objects = Interface.create(Objects);

module.exports = Objects;
