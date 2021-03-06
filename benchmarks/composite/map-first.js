var array = require('../array');
var _ = require('underscore');
var __ = require('lodash');
var u = require('../../dist/main');

var _map = _.map;
var __map = __.map;

var _first = _.first;
var __first = __.take;

var _chain = _.chain;
var __chain = __.chain;

function map(x, i) {
    return x.x + i;
}

var fn = u('array').map(map).first(3).fn();
var nativeFn = function(array) {
    var length = array.length;
    if (length > 3) {
        length = 3;
    }
    var result = new Array(length);
    for (var i = 0; i < length; ++i) {
        result[i] = map(array[i], i);
    }
    return result;
};

module.exports = {
    name: 'map and first',
    tests: {
        native: function() {
            return nativeFn(array);
        },
        undersorcery: function() {
            return fn(array);
        },
        underscore: function() {
            return _first(_map(array, map), 3);
        },
        lodash: function() {
            return __first(__map(array, map), 3);
        },
        'underscore chaining': function() {
            return _chain(array).map(map).first(3).value();
        },
        'lodash chaining': function() {
            return __chain(array).map(map).take(3).value();
        }
    }
};