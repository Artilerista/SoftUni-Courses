const expect = require('chai').expect;
const { rgbToHexColor } = require('./RGBToHex');

describe('RGBToHex', function () {
    it('arguments are not integers', () => {
        expect(rgbToHexColor('0', '0', '0')).to.be.equal(undefined);
    })
    it('one of arguments is not integer', () => {
        expect(rgbToHexColor(0, 0, '0')).to.be.equal(undefined);
    })
    it('arguments are not integers', () => {
        expect(rgbToHexColor([0, 0, 0])).to.be.equal(undefined);
    })
    it('arguments are not integers', () => {
        expect(rgbToHexColor({})).to.be.equal(undefined);
    })
    it('arguments are out of range', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.equal(undefined);
    })
    it('arguments are out of range', () => {
        expect(rgbToHexColor(266, 255, 255)).to.be.equal(undefined);
    })
    it('return white color', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    })
    it('return black color', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    })
    it('return softuni blue', () => {
        expect(rgbToHexColor(35, 68, 101)).to.be.equal('#234465');
    })
    it('arguments are float numbers', () => {
        expect(rgbToHexColor(1.15, 0, 0)).to.be.equal(undefined);
    })
})