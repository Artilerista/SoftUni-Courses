let { bookSelection } = require('./bookSelection');
let expect = require('chai').expect;

describe('Test', function () {
    describe('isGenreSuitable', function () {
        it('happy path', function () {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.be.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.be.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Action', 11)).to.be.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Action', 15)).to.be.equal('Those books are suitable');
        })
        it('edge cases', () => {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.be.equal(`Books with Horror genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.be.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.be.equal(`Books with Horror genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.be.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
        })
    })
    describe('isItAffordable', function () {
        it('invalid input', () => {
            expect(() => bookSelection.isItAffordable('1', 1)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(1, '1')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable('1', '1')).to.throw('Invalid input');
        })
        it('if budget is lower than price', () => {
            expect(bookSelection.isItAffordable(2, 1)).to.be.equal('You don\'t have enough money');
        })
        it('if budget is more or equal than price', () => {
            expect(bookSelection.isItAffordable(1, 1)).to.be.equal('Book bought. You have 0$ left');
            expect(bookSelection.isItAffordable(1, 2)).to.be.equal('Book bought. You have 1$ left');
        })
    })
    describe('suitableTitles', function () {
        it('invalid input', () => {
            expect(() => bookSelection.suitableTitles('Harry Potter', 'Thriller')).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 12)).to.throw('Invalid input');
        })
        it('happy path', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Troy", genre: "Drama" }], "Thriller")).to.be.deep.equal(['The Da Vinci Code']);
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Troy", genre: "Thriller" }], "Thriller")).to.be.deep.equal(['The Da Vinci Code', 'Troy']);
        })
        
    })
})
