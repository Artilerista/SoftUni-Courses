function heartDelivery(array) {
    let houses = array.shift().split('@').map(Number);
    let cupidIndex = 0;
    for (let i = 0; i < array.length; i++) {
        let token = array[i].split(' ');
        let command = token[0];
        if (command === 'Love!') {
            console.log(`Cupid's last position was ${cupidIndex}.`);
            let newHouses = houses.filter(x => x === 0);
            if (newHouses.length === houses.length) {
                console.log('Mission was successful.');
            } else {
                let sum = houses.length - newHouses.length;
                console.log(`Cupid has failed ${sum} places.`);
            }
            break;
        }
        let jump = Number(token[1]);
        cupidIndex += jump;
        if (cupidIndex >= houses.length) {
            cupidIndex = 0;
        }
        if (houses[cupidIndex] === 0) {
            console.log(`Place ${cupidIndex} already had Valentine's day.`);
        } else if (houses[cupidIndex] > 0) {
            let house = houses[cupidIndex];
            house -= 2;
            houses.splice(cupidIndex, 1, house);
            if (houses[cupidIndex] === 0) {
                console.log(`Place ${cupidIndex} has Valentine's day.`);
            }
        }
    }
}
heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]
)