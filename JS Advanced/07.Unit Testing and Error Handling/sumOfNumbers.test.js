const { sum } = require('./sumOfNumbers');
const expect = require('chai').expect;

describe ('sumOfNumbers', function () {

    it('should return NaN if arguments in the array are not numbers', () => {
        expect(sum([1,'2'])).to.equal(3);
    })
    it('should return undefind if the array is empty', () => {
        expect(sum([])).to.equal(0);
    })
    it('should return sum of the array numbres', () => {
        expect(sum([1,2,3])).to.equal(6);
    })
}) 