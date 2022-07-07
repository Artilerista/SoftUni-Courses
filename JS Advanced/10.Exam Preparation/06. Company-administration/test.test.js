let { companyAdministration } = require('./companyAdministration');
let expect = require('chai').expect;

describe('companyAdministration', function () {
    describe('hiringEmployee', function () {
        it('invalid position', () => {
            expect(() => companyAdministration.hiringEmployee('alex', 'Prog', 5)).to.throw('We are not looking for workers for this position.')
        })
        it('invalid years', () => {
            expect(companyAdministration.hiringEmployee('alex', 'Programmer', 2)).to.be.equal('alex is not approved for this position.')
        })
        it('valid edge years', () => {
            expect(companyAdministration.hiringEmployee('alex', 'Programmer', 3)).to.be.equal('alex was successfully hired for the position Programmer.')
        })
        it('valid  years', () => {
            expect(companyAdministration.hiringEmployee('alex', 'Programmer', 4)).to.be.equal('alex was successfully hired for the position Programmer.')
        })
    })
    describe('calculateSalary', function () {
        it('invalid input', () => {
            expect(() => companyAdministration.calculateSalary('2')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary('a')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
        })
        it('under 160 hours', () => {
            expect(companyAdministration.calculateSalary(1)).to.be.equal(15);
            expect(companyAdministration.calculateSalary(100)).to.be.equal(1500);
        })
        it('under 160 hours edge case', () => {
            expect(companyAdministration.calculateSalary(160)).to.be.equal(2400);
        })
        it('over 160 hours', () => {
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415);
        })
    })
    describe('firedEmployee', function () {
        it('invalid input', () => {
            expect(() => companyAdministration.firedEmployee('gaga', 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee('gaga', '1')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Peter', 'Ivan', 'George'], 'a')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Peter', 'Ivan', 'George'], -1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Peter', 'Ivan', 'George'], 3)).to.throw('Invalid input');
        })
        it('remove param on index', () => {
            expect(companyAdministration.firedEmployee(['Peter', 'Ivan', 'George'], 1)).to.be.equal('Peter, George');
        })
    })
})