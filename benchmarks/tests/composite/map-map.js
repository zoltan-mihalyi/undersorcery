var array = require('../../array');
var _ = require('underscore');
var __ = require('lodash');
var dp = require('../../../dist/datapipe');

var _map = _.map;
var __map = __.map;

function map1(x, i) {
    return x.x + i;
}
function map2(x) {
    return x + 1;
}
var fn = dp().map(map1).map(map2).fn();
var nativeFn = function(array) {
    var result = new Array(array.length);
    var length = array.length;
    for (var i = 0; i < length; ++i) {
        result[i] = map2(map1(array[i], i));
    }
    return result;
};


module.exports = {
    name: 'map two times',
    tests: {
        native: function() {
            return nativeFn(array);
        },
        undersorcery: function() {
            return fn(array);
        },
        underscore: function() {
            return _map(_map(array, map1), map2);
        },
        lodash: function() {
            return __map(__map(array, map1), map2);
        }
    }
};