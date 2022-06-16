const { createCalculator } = require('./addSubtract');
const expect = require('chai').expect;
console.log(createCalculator().get())


describe('addSubtract', function () {
    it('Is the type object', () => {
        expect(typeof createCalculator()).to.be.equal('object');
    })
    it('Is createCalculator have property add', () => {
        expect(createCalculator()).to.have.property('add');
    })
    it('Is createCalculator have property subtract', () => {
        expect(createCalculator()).to.have.property('subtract');
    })
    it('Is createCalculator have property get', () => {
        expect(createCalculator()).to.have.property('get');
    })
    it('Is add function', () => {
        expect(typeof createCalculator().add).to.be.equal('function');
    })
    it('Is subtract function', () => {
        expect(typeof createCalculator().subtract).to.be.equal('function');
    })
    it('Is get function', () => {
        expect(typeof createCalculator().get).to.be.equal('function');
    })
    it('value to be equal to 0', () => {
        expect(createCalculator().get()).to.be.equal(0);
    })
    it('value to be equal to 1', () => {
        let calc = createCalculator()
        calc.add(1);
        expect(calc.get()).to.be.equal(1);
    })
    it('value to be equal to 0', () => {
        let calc = createCalculator()
        calc.subtract(1);
        expect(calc.get()).to.be.equal(-1);
    })
    it('value to be equal to 1', () => {
        let calc = createCalculator()
        calc.add('1');
        expect(calc.get()).to.be.equal(1)
    })
    it('value to be equal to 0', () => {
        let calc = createCalculator()
        calc.subtract('1');
        expect(calc.get()).to.be.equal(-1);
    })
    
})
