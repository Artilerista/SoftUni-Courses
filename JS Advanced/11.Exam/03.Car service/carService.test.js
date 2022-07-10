const { carService } = require('./03. Car service_Resources');
const expect = require('chai').expect;

describe('carService', function () {
    describe('isItExpensive', function () {
        it('happy path', () => {
            expect(carService.isItExpensive('Engine')).to.be.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.be.equal('The issue with the car is more severe and it will cost more money');
        })
        it('unhappy path', () => {
            expect(carService.isItExpensive('Magi')).to.be.equal('The overall price will be a bit cheaper');
        })
    })
    describe('discount', function () {
        it('invalid input', () => {
            expect(() => carService.discount('1', 100)).to.throw('Invalid input');
            expect(() => carService.discount('1', '100')).to.throw('Invalid input');
            expect(() => carService.discount(1, '100')).to.throw('Invalid input');
            expect(() => carService.discount('a', 100)).to.throw('Invalid input');
        })
        it('parts are equal or lower than 2', () => {
            expect(carService.discount(2, 100)).to.be.equal('You cannot apply a discount');
            expect(carService.discount(1, 100)).to.be.equal('You cannot apply a discount');
        })
        it('parts are between 3 and 7', () => {
            expect(carService.discount(3, 100)).to.be.equal('Discount applied! You saved 15$');
            expect(carService.discount(7, 100)).to.be.equal('Discount applied! You saved 15$');
        })
        it('parts are more than 7', () => {
            expect(carService.discount(8, 100)).to.be.equal('Discount applied! You saved 30$');
            expect(carService.discount(10, 100)).to.be.equal('Discount applied! You saved 30$');
        })
    })
    describe('partsToBuy', function () {
        it('invalid input', () => {
            expect(() => carService.partsToBuy('adad', ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 'adad')).to.throw('Invalid input');
            expect(() => carService.partsToBuy('adad', 2123)).to.throw('Invalid input');
        })
        it('catalog is empty', () => {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.be.equal(0);
        })
        it('happy path', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.be.equal(145);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"])).to.be.equal(375);
        })
    })
})