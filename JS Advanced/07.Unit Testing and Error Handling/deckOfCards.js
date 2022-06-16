function deckOfCards(array) {
    function playingCards(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }
        if (validFaces.includes(face) === false) {
            throw new Error('Error');
        }
        if (validSuits.hasOwnProperty(suit) === false) {
            throw new Error('Error');
        }
        return {
            face,
            suit: validSuits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }
    let list = [];
    for (const card of array) {
        let suit = card.slice(-1);
        let face = card.slice(0, -1);

        try {
            const result = playingCards(face, suit);
            list.push(result);
        } catch (err) {
            list = [`Invalid card: ${card}`];
            break;
        }
    }
    console.log(list.join(' '));

}
deckOfCards(['AS', '10D', 'KH', '2C'])
deckOfCards(['5S', '3D', 'QD', '1C', 'QD'])