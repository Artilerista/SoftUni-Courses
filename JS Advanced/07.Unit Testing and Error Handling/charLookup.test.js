const { lookupChar } = require("./charLookup")
const expect = require('chai').expect;


describe('charLookup', function () {
    it('first param is not string', () => {
        expect(lookupChar(21213, 1)).to.be.undefined;
    })
    it('first param is not string', () => {
        expect(lookupChar([], 1)).to.be.undefined;
    })
    it('second param is not string', () => {
        expect(lookupChar('alabala', '1')).to.be.undefined;
    })
    it('second param is not string', () => {
        expect(lookupChar('alabala', 'aaag')).to.be.undefined;
    })
    it('second param is not string', () => {
        expect(lookupChar('alabala', [])).to.be.undefined;
    })
    it('index is bigger than string', () => {
        expect(lookupChar('alaba', 6)).to.be.equal('Incorrect index');
    })
    it('index is lower than string', () => {
        expect(lookupChar('alaba', -1)).to.be.equal('Incorrect index');
    })
    it('index is equal to the string length', () => {
        expect(lookupChar('alaba', 5)).to.be.equal('Incorrect index');
    })
    it('both params are correct type and index in correct range', () => {
        expect(lookupChar('alaba', 1)).to.be.equal('l');
    })
    it('if both params are not correct type', () => {
        expect(lookupChar([], '1')).to.be.undefined;
    })
    it('if second param is not integer', () => {
        expect(lookupChar('alaba', 1.25)).to.be.undefined;
    })
})