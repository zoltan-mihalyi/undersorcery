var dp = require('../../dist/datapipe');

describe('filter tests', function() {
    it('Filtering an array should return an array of the items matching the predicate.', function() {
        expect(dp().filter(function(x) {
            return x % 2 === 0;
        }).process([0, 1, 2, 3, 4])).toEqual([0, 2, 4]);
    });

    it('filter with context', function() {
        expect(dp().filter(function(x) {
            return x % 2 === this.value;
        }, {value: 0}).process([0, 1, 2, 3, 4])).toEqual([0, 2, 4]);
    });
});