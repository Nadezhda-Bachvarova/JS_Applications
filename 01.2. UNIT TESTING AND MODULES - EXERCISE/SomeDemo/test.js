const expect = require('chai').expect; //module pakage, object with func 'chai' for tests
const app = require('./app'); //module, file

describe('Main functionality', function() {
    it('should return 5', function() {
        expect(app.getNumber()).to.equal(5);
    });
    it('it should add 5 and 3 to get 8', function() {
        expect(app.addNumber(5, 3)).to.equal(8);
    });
});