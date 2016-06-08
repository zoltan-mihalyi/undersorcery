var dp = require('../../dist/datapipe');

describe('reduceRight tests', function() {
    it('Calling reduceRight should work as expected.', function() {
        expect(dp()
            .reduceRight(function(memo, x) {
                return memo + x;
            }, '')
            .process(['a', 'b', 'c', 'd', 'e'])).toBe('edcba');
    });

    it('reduceRight with context', function() {
        expect(dp()
            .reduceRight(function(memo, x) {
                return memo + x + this.value;
            }, '', {value: '-'})
            .process(['a', 'b', 'c', 'd', 'e'])
        ).toBe('e-d-c-b-a-');
    });

    it('reduceRight with index', function() {
        expect(dp()
            .reduceRight(function(memo, x, i) {
                memo.push(i);
                return memo;
            }, function() {
                return [];
            })
            .process([1, 2, 3, 4, 5])
        ).toEqual([4, 3, 2, 1, 0]);
    });
});