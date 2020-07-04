const expect = require('chai').expect;
const PaymentPackage = require('./PaymentPackage');

describe('PaymentPackage', () => {
    const validName = 'May Package';
    const validValue = 120;

    describe('Instantiation', () => {
        it('works with valid parameters', () => {
            expect(() => new PaymentPackage(validName, validValue)).to.be.true;
        });

        it('is correctly set up', () => {
            const instance = new PaymentPackage(validName, validValue);
            expect(instance.name).to.equal(validName);
            expect(instance.value).to.equal(validValue);
            expect(instance.VAT).to.equal(20);
            expect(instance.active).to.equal(true);
        });

        it('does not work with invalid name', () => {
            expect(() => new PaymentPackage('', validValue)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(undefined, validValue)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(5, validValue)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage({}, validValue)).to.throw('Name must be a non-empty string');
        });

        it('does not work with invalid value', () => {
            expect(() => new PaymentPackage(validName, '')).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage(validName, -3)).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage(validName, [])).to.throw('Value must be a non-negative number');
        });

        it('has all properties', () => {
            const instance = new PaymentPackage(validName, validValue);

            expect(instance).to.have.property('name');
            expect(instance).to.have.property('value');
            expect(instance).to.have.property('VAT');
            expect(instance).to.have.property('active');
        });
    });

    describe('Accessors', () => {
        let instance = null;
        //всеки тест ще има нова инстанция, те са независими
        beforeEach(() => {
            instance = new PaymentPackage(validName, validValue);
        });

        it('accept and sets valid name', () => {
            instance.name = 'New Package';
            expect(instance.name).to.equal('New Package');
        });

        it('reject invalid name', () => {
            expect(() => instance.name = '').to.throw('Name must be a non-empty string');
            expect(() => instance.name = undefined).to.throw('Name must be a non-empty string');
            expect(() => instance.name = {}).to.throw('Name must be a non-empty string');
        });

        it('accept and sets valid value', () => {
            instance.value = 90;
            expect(instance.value).to.equal(90);
        });

        it('reject invalid value', () => {
            expect(() => instance.value = '').to.throw('Value must be a non-negative number');
            expect(() => instance.value = undefined).to.throw('Value must be a non-negative number');
            expect(() => instance.value = -5).to.throw('Value must be a non-negative number');
        });

        it('accept and sets valid VAT', () => {
            instance.VAT = 15;
            expect(instance.VAT).to.equal(15);
        });

        it('reject invalid VAT', () => {
            expect(() => instance.VAT = '').to.throw('VAT must be a non-negative number');
            expect(() => instance.VAT = undefined).to.throw('VAT must be a non-negative number');
            expect(() => instance.VAT = -50).to.throw('VAT must be a non-negative number');
        });

        it('accept and sets valid active', () => {
            instance.active = true;
            expect(instance.active).to.equal(true);
        
            instance.active = false;
            expect(instance.active).to.equal(false);
        });

        it('reject invalid active', () => {
            expect(() => instance.active = '').to.throw('Active status must be a boolean');
            expect(() => instance.active = undefined).to.throw('Active status must be a boolean');
            expect(() => instance.active = -50).to.throw('Active status must be a boolean');
        });
    });

    describe('String info', () => {
        let instance = null;
        beforeEach(() => {
            instance = new PaymentPackage(validName, validValue);
        });

        it('contains the name', () => {
            expect(instance.toString()).to.contain(validName);
        });

        it('contains the value', () => {
            expect(instance.toString()).to.contain(validValue.toString());
        });

        it('contains the VAT', () => {
            expect(instance.toString()).to.contain(instance.VAT + '%');
        });

        it('display inactive label', () => {
            instance.active = false;

            expect(instance.toString()).to.contain('inactive');
        });

        it('update info through setters', () => {
            instance.name = 'New Package';
            instance.value = 90;
            instance.VAT = 9;

            const output = instance.toString();

            expect(output).to.contain('New Package');
            expect(output).to.contain('90');
            expect(output).to.contain('9%');
        });
    });
});