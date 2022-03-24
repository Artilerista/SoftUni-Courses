function cardGame(array) {
    let list = {};
    let cards = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    }
    let types = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    }
    for (let line of array) {
        let [name, cards] = line.split(': ');
        cards = cards.split(', ');
        if (!list.hasOwnProperty(name)) {
            list[name] = new Set()
        }
            for (let card of cards) {
                list[name].add(card)
            }
    }
    for (let name in list) {
        let arrayForName = Array.from(list[name]);
        let power = 0;
        for (let card of arrayForName) {
            let numOfcard = card[0];
            let typeOfcard = card.slice(-1);
            power+= cards[numOfcard] * types[typeOfcard];
        }
        console.log(`${name}: ${power}`)
    }


}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)