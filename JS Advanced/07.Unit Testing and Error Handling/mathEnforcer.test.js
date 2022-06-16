const { describe } = require("mocha");
const { mathEnforcer } = require("./mathEnforcer")
const expect = require('chai').expect;

mathEnforcer

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('param is not number', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined;
        })
        it('param is not number', () => {
            expect(mathEnforcer.addFive('agag')).to.be.undefined;
        })
        it('param is not number', () => {
            expect(mathEnforcer.addFive([])).to.be.undefined;
        })
        it('param is not number', () => {
            expect(mathEnforcer.addFive()).to.be.undefined;
        })
        it('param is a number', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        })
        it('param is a number', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        })
        it('param is a float number', () => {
            expect(mathEnforcer.addFive(5.15)).to.be.closeTo(10.15, 0.01);
        })
    })
    describe('subtractTen', function () {
        it('param is not number', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
        })
        it('param is not number', () => {
            expect(mathEnforcer.subtractTen('agag')).to.be.undefined;
        })
        it('param is not number', () => {
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        })
        it('param is not number', () => {
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        })
        it('param is a number', () => {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        })
        it('param is a float number', () => {
            expect(mathEnforcer.subtractTen(5.15)).to.be.closeTo(-4.85, 0.01);
        })
        it('param is a number', () => {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        })

    })
    describe('sum', function () {
        it('both params are not number', () => {
            expect(mathEnforcer.sum('1', 'agal')).to.be.undefined;
        })
        it('both params are not number', () => {
            expect(mathEnforcer.sum([], 'agal')).to.be.undefined;
        })
        it('fisrt param is not number', () => {
            expect(mathEnforcer.sum([], 5)).to.be.undefined;
        })
        it('second param is not number', () => {
            expect(mathEnforcer.sum(5, 'agawga')).to.be.undefined;
        })
        it('both params are numbers', () => {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        })
        it('both params are float numbers', () => {
            expect(mathEnforcer.sum(5.12, 5.13)).to.be.closeTo(10.25, 0.01);
        })
    })
})