function partyTime(array) {
    let vip = [];
    let regular = [];
    while (array[0] !== 'PARTY') {
        let guest = array.shift();
        let firstWord = guest[0];
        if (firstWord >= '0' && firstWord <= '9') {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }
    array.shift();
    for (let guest of array) {
        if (vip.includes(guest)) {
            let index = vip.indexOf(guest);
            vip.splice(index, 1);
        } else if (regular.includes(guest)) {
            let index = regular.indexOf(guest);
            regular.splice(index, 1);

        }
    }
    console.log(regular.length + vip.length);
    for (let guest of vip) {
        console.log(guest);
    }
    for (let guest of regular) {
        console.log(guest);
    }
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]


)