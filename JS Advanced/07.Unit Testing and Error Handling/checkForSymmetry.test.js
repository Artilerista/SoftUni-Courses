const { isSymmetric } = require('./checkForSymmetry');
const expect = require('chai').expect;

describe('checkForSymmetry', function () {
    it('return true if array is odd and symetrical', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it('return true if array is even and symetrical', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('return false if array is even and not symetrical', () => {
        expect(isSymmetric([2, 1, 2, 1])).to.be.false;
    });
    it('return false if array is odd and not symetrical', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it('return false if param is not array', () => {
        expect(isSymmetric(1)).to.be.false;
    });
    it('return false if param is not array', () => {
        expect(isSymmetric('abba')).to.be.false;
    });
    it('return true if array is symetric', () => {
        expect(isSymmetric(['a','b','b','a'])).to.be.true;
    });
    it('return false if array elements are not at same type', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
})