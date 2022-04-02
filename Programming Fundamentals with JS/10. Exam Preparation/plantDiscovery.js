function plantDiscovery(array) {
    let book = {};
    let n = Number(array.shift());
    for (let i = 0; i < n; i++) {
        let tokens = array.shift().split('<->');
        let plant = tokens[0];
        let rarity = Number(tokens[1]);
        book[plant] = {
            rarity,
            rating: 0,
            counter: 0,
        }
    }

    while (array[0] !== 'Exhibition') {
        let tokens = array.shift().split(': ');
        let command = tokens[0];
        let [plant, p1] = tokens[1].split(' - ');
        let flower = book[plant];
        if (book.hasOwnProperty(plant)) {
            if (command === 'Rate') {
                p1 = Number(p1);
                flower.counter++;
                flower.rating += p1;
            } else if (command === 'Update') {
                flower.rarity = Number(p1);
            } else if (command === 'Reset') {
                flower.rating = 0;
                flower.counter = 0;
            }
        } else {
            console.log('error');
        }
    }
    console.log('Plants for the exhibition:');
    for (let [plant, obj] of Object.entries(book)) {
        if (obj.rating !== 0 && obj.counter !== 0) {
            console.log(`- ${plant}; Rarity: ${obj.rarity}; Rating: ${(obj.rating / obj.counter).toFixed(2)}`);
        } else {
            console.log(`- ${plant}; Rarity: ${obj.rarity}; Rating: ${(obj.rating).toFixed(2)}`);
        }
    }
}
plantDiscovery((["4",
    "Arnoldii<->4",
    "Arnoldii<->5",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Rate: Woodii - 10",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Rate: Snoop - 10",
    "Exhibition"])
)