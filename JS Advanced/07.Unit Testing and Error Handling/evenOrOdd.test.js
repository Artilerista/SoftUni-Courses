const { isOddOrEven } = require("./evenOrOdd");
const expect = require('chai').expect;

describe ('evenOrOdd', function () {
    it('chekcing if param is not string', () => {
        expect(isOddOrEven(3)).to.be.undefined;
    })
    it('chekcing if param is not string', () => {
        expect(isOddOrEven([])).to.be.undefined;
    })
    it('chekcing if param is not string', () => {
        expect(isOddOrEven({})).to.be.undefined;
    })
    it('chekcing if param length is odd', () => {
        expect(isOddOrEven('alaba')).to.be.equal('odd');
    })
    it('chekcing if param length is even', () => {
        expect(isOddOrEven('alabal')).to.be.equal('even');
    })
})

