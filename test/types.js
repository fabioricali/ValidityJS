/**
 * Created by Fabio on 18/06/2017.
 */
//if(typeof process === 'object') {
    const assert = require('assert');
    const be = require('../index');
    const Types = require('../src/checks/types');
//}

describe('boolean', function () {
    it('boolean value, should be return true', function () {
        var result = be.boolean(true);
        console.log(result);
        assert.equal(result, true);
    });

    it('using direct module, boolean value, should be return true', function () {
        var result = Types.boolean(false);
        console.log(result);
        assert.equal(result, true);
    });

    it('string value, should be return false', function () {
        var result = be.boolean('true');
        console.log(result);
        assert.equal(result, false);
    });

    it('number value, should be return false', function () {
        var result = be.boolean(1);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined value, should be return false', function () {
        var result = be.boolean();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('number', function () {
    it('number value, should be return true', function () {
        var result = be.number(1);
        console.log(result);
        assert.equal(result, true);
    });
    it('negative number value, should be return true', function () {
        var result = be.number(-1);
        console.log(result);
        assert.equal(result, true);
    });

    it('number value as string, should be return false', function () {
        var result = be.number('1');
        console.log(result);
        assert.equal(result, false);
    });

    it('float value, should be return true', function () {
        var result = be.number(2.2);
        console.log(result);
        assert.equal(result, true);
    });

    it('infinite value, should be return true', function () {
        var result = be.number(1.7976931348623157E+10308);
        console.log(result);
        assert.equal(result, true);
    });

    it('undefined value, should be return false', function () {
        var result = be.number();
        console.log(result);
        assert.equal(result, false);
    });

    it('NaN value, should be return false', function () {
        var result = be.number(NaN);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('string', function () {
    it('string value, should be return true', function () {
        var result = be.string('hello');
        console.log(result);
        assert.equal(result, true);
    });

    it('number value, should be return false', function () {
        var result = be.string(1);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined value, should be return false', function () {
        var result = be.string();
        console.log(result);
        assert.equal(result, false);
    });

    it('each strings should be return true', function () {
        var result = be.each.string('string1', 'string2', 'string3');
        console.log(result);
        assert.equal(result, true);
    });

    it('each strings as array should be return true', function () {
        var result = be.each.string(['string1', 'string2', 'string3']);
        console.log(result);
        assert.equal(result, true);
    });

    it('two strings and one number should be return false', function () {
        var result = be.each.string('string1', 'string2', 3);
        console.log(result);
        assert.equal(result, false);
    });

    it('some string should be return true', function () {
        var result = be.some.string('string1', 2, 3);
        console.log(result);
        assert.equal(result, true);
    });

    it('each numbers should be return false', function () {
        var result = be.some.string(1, 2, 3);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('undefined', function () {
    it('should be return true', function () {
        var result = be.undefined();
        console.log(result);
        assert.equal(result, true);
    });

    it('number value, should be return false', function () {
        var result = be.undefined(1);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('null', function () {
    it('should be return true', function () {
        var result = be.null(null);
        console.log(result);
        assert.equal(result, true);
    });

    it('number value, should be return false', function () {
        var result = be.null(1);
        console.log(result);
        assert.equal(result, false);
    });

    it('undefined value, should be return false', function () {
        var result = be.null();
        console.log(result);
        assert.equal(result, false);
    });
});

describe('object', function () {
    it('object, should be return true', function () {
        var result = be.object({a: 1, b: 2, c: [1, 2, 3]});
        console.log(result);
        assert.equal(result, true);
    });

    it('array, should be return false', function () {
        var result = be.object([1, 2, 3]);
        console.log(result);
        assert.equal(result, false);
    });

    it('should be return false', function () {
        var result = be.object('fabio@rica');
        console.log(result);
        assert.equal(result, false);
    });
});


describe('json', function () {
    it('JSON string, should be return true', function () {
        var result = be.json('{"a": 1, "b": 2}');
        console.log(result);
        assert.equal(result, true);
    });

    it('not valid JSON string, should be return false', function () {
        var result = be.json('"a": 1, "b": 2');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('date', function () {
    it('date object, should be return true', function () {
        var result = be.date(new Date());
        console.log(result);
        assert.equal(result, true);
    });

    it('not valid date, should be return false', function () {
        var result = be.date('2017-06-11');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('function', function () {
    it('function, should be return true', function () {
        var result = be.function(function () {
            return 1 + 1;
        });
        console.log(result);
        assert.equal(result, true);
    });

    it('string, should be return false', function () {
        var result = be.function('function(){}');
        console.log(result);
        assert.equal(result, false);
    });
});

describe('sameType', function () {
    it('should be return true', function () {
        var result = be.sameType('hello', 'ciao');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.sameType(true, 1);
        console.log(result);
        assert.equal(result, false);
    });
    it('undefined arguments, should be return true', function () {
        var result = be.sameType();
        console.log(result);
        assert.equal(result, true);
    });
});

describe('regexp', function () {
    it('should be return true', function () {
        var result = be.regexp(/hello/);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.regexp([]);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('booleanFalse', function () {
    it('should be return true', function () {
        var result = be.booleanFalse(false);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.booleanFalse(true);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('booleanTrue', function () {
    it('should be return true', function () {
        var result = be.booleanTrue(true);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.booleanTrue(false);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('empty', function () {
    it('should be return true', function () {
        var result = be.empty('');
        console.log(result);
        assert.equal(result, true);
    });
    it('undefined value, should be return true', function () {
        var result = be.empty();
        console.log(result);
        assert.equal(result, true);
    });
    it('space string, should be return false', function () {
        var result = be.empty(' ');
        console.log(result);
        assert.equal(result, false);
    });
    it('number, should be return false', function () {
        var result = be.empty(3);
        console.log(result);
        assert.equal(result, false);
    });
    it('negative number, should be return false', function () {
        var result = be.empty(-3);
        console.log(result);
        assert.equal(result, false);
    });
    it('zero number, should be return false', function () {
        var result = be.empty(0);
        console.log(result);
        assert.equal(result, false);
    });
    it('object, should be return true', function () {
        var result = be.empty({});
        console.log(result);
        assert.equal(result, true);
    });
    it('null, should be return true', function () {
        var result = be.empty(null);
        console.log(result);
        assert.equal(result, true);
    });
    it('function, should be return false', function () {
        var result = be.empty(function () {});
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return false', function () {
        var result = be.empty('test');
        console.log(result);
        assert.equal(result, false);
    });
    it('empty array, should be return true', function () {
        var result = be.empty([]);
        console.log(result);
        assert.equal(result, true);
    });
    it('array with item, should be return false', function () {
        var result = be.empty([3]);
        console.log(result);
        assert.equal(result, false);
    });
    it('NaN, should be return true', function () {
        var result = be.empty(NaN);
        console.log(result);
        assert.equal(result, true);
    });
    it('boolean true, should be return false', function () {
        var result = be.empty(true);
        console.log(result);
        assert.equal(result, false);
    });
    it('boolean false, should be return false', function () {
        var result = be.empty(false);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('falsy', function () {
    it('false, should be return true', function () {
        var result = be.falsy(false);
        console.log(result);
        assert.equal(result, true);
    });
    it('null, should be return true', function () {
        var result = be.falsy(null);
        console.log(result);
        assert.equal(result, true);
    });
    it('undefined, should be return true', function () {
        var result = be.falsy();
        console.log(result);
        assert.equal(result, true);
    });
    it('0, should be return true', function () {
        var result = be.falsy(0);
        console.log(result);
        assert.equal(result, true);
    });
    it('NaN, should be return true', function () {
        var result = be.falsy(NaN);
        console.log(result);
        assert.equal(result, true);
    });
    it('empty string, should be return true', function () {
        var result = be.falsy('');
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var result = be.falsy(true);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('truthy', function () {
    it('string, should be return true', function () {
        var result = be.truthy('hello');
        console.log(result);
        assert.equal(result, true);
    });
    it('object, should be return true', function () {
        var result = be.truthy({});
        console.log(result);
        assert.equal(result, true);
    });
    it('array, should be return true', function () {
        var result = be.truthy([]);
        console.log(result);
        assert.equal(result, true);
    });
    it('number, should be return true', function () {
        var result = be.truthy(2);
        console.log(result);
        assert.equal(result, true);
    });
    it('true, should be return true', function () {
        var result = be.truthy(true);
        console.log(result);
        assert.equal(result, true);
    });
    it('false, should be return true', function () {
        var result = be.truthy(false);
        console.log(result);
        assert.equal(result, false);
    });
    it('null, should be return true', function () {
        var result = be.truthy(null);
        console.log(result);
        assert.equal(result, false);
    });
    it('undefined, should be return true', function () {
        var result = be.truthy();
        console.log(result);
        assert.equal(result, false);
    });
});