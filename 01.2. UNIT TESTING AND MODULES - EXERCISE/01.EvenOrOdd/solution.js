const expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
    }

describe('Odd or Even', () => {
    it('should return odd', () => {
        expect(isOddOrEven('abc')).to.equal('odd');
    });

    it('should return even', () => {
        expect(isOddOrEven('abcd')).to.equal('even');
    });

    it('should return undefined', () => {
        expect(isOddOrEven(5)).to.equal(undefined);
        expect(isOddOrEven([])).to.equal(undefined);
        expect(isOddOrEven({})).to.equal(undefined);
    });
});