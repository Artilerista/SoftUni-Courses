function degustationParty(array) {
    let list = {};
    let counter = 0;
    while (array[0] !== 'Stop') {
        let tokens = array.shift().split('-');
        let commnad = tokens[0];
        let guest = tokens[1];
        let meal = tokens[2];
        if (commnad === 'Like') {
            if (!list.hasOwnProperty(guest)) {
                list[guest] = new Set();
                if (!list[guest].has(meal)) {
                    list[guest].add(meal);
                }
            } else {
                if (!list[guest].has(meal)) {
                    list[guest].add(meal);
                }
            }
        } else if (commnad === 'Dislike') {
            if (!list.hasOwnProperty(guest)) {
                console.log(`${guest} is not at the party.`);
            } else {
                if (!list[guest].has(meal)) {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
                } else {
                    list[guest].delete(meal);
                    console.log(`${guest} doesn't like the ${meal}.`)
                    counter++;
                }
            }
        }
    }
    for (let [guest, set] of Object.entries(list)) {
        let meals = [];
        for (let meal of set) {
            meals.push(meal);
        }
        console.log(`${guest}: ${meals.join(', ')}`);
    }
    console.log(`Unliked meals: ${counter}`);
}
degustationParty(["Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"])