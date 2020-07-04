const expect = require('chai').expect;
const mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer', function() {
    describe('addFive', function() {
        it('should return undefined if no number is parameter', function () {
            expect(mathEnforcer.addFive('some string')).to.equal(undefined);
        });

        it('should return correct result if given parameter is number', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-15)).to.equal(-10);
            expect(mathEnforcer.addFive(5.01)).to.closeTo(10.01, 0.01);
        });
    });

    describe('substracTen', function() {
        it('should return undefined if no number is parameter', function () {
            expect(mathEnforcer.subtractTen('some string')).to.equal(undefined);
        });
        it('should return correct result if given parameter is number', function () {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
            expect(mathEnforcer.subtractTen(29.99)).to.closeTo(19.99, 0.01);
        });
    });

    describe('sum', function() {
        it('should return undefined result if one of two params is no-number', function () {
            expect(mathEnforcer.sum(1, '2')).to.equal(undefined);
            expect(mathEnforcer.sum('abc', 3)).to.equal(undefined);    
        });

        it('should return sum if two params is numbers', function() {
            expect(mathEnforcer.sum(10, 20)).to.equal(30);
            expect(mathEnforcer.sum(-22, 2)).to.equal(-20);
            expect(mathEnforcer.sum(2.2, 3.3)).to.be.closeTo(5.5, 0.01);
        });
    });
});