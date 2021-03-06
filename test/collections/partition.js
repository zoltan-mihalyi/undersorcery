var u = require('../../dist/main');

describe('partition tests', function() {
    it('simple partition', function() {
        expect(u()
            .partition(function(x) {
                return x % 2 === 0;
            })
            .process([1, 2, 3, 4, 5])
        ).toEqual([[2, 4], [1, 3, 5]]);
    });

    it('partition with property', function() {
        expect(u()
            .partition('a')
            .process([{}, {a: 1, b: 1}, {a: 0}, {a: 1, b: 2}, {a: 2}])
        ).toEqual([[{a: 1, b: 1}, {a: 1, b: 2}, {a: 2}], [{}, {a: 0}]]);
    });

    it('partition with properties', function() {
        expect(u()
            .partition({a: 1})
            .process([{}, {a: 1, b: 1}, {a: 1, b: 2}, {a: 2}])
        ).toEqual([[{a: 1, b: 1}, {a: 1, b: 2}], [{}, {a: 2}]]);
    });

    it('partition without parameter', function() {
        expect(u()
            .partition()
            .process([0, 1, 2, void 0, true, false, null, 'a', ''])
        ).toEqual([[1, 2, true, 'a'], [0, void 0, false, null, '']]);
    });
});