function partyTime(array) {
    let listOfVip = new Map();
    let listOfRegular = new Map()
    for (let guest of array) {
        if (guest === 'PARTY') {
            break;
        }
        let firstWord = guest[0].charCodeAt();
        if (firstWord >= 48 && firstWord <= 57) {
            if (!listOfVip.has(guest)) {
                listOfVip.set(guest, 0);
            }
            let currnetGuest = listOfVip.get(guest) + 1;
            listOfVip.set(guest, currnetGuest);
        }
        if (firstWord >= 65 && firstWord <= 90 || firstWord >= 97 && firstWord <= 122) {
            if (!listOfRegular.has(guest)) {
                listOfRegular.set(guest, 0);
            }
            let currnettGuest = listOfRegular.get(guest) + 1;
            listOfRegular.set(guest, currnettGuest);
        }
    }
    let index = array.indexOf('PARTY');
    for (let i = index + 1; i < array.length; i++) {
        let guest = array[i];
        if (listOfVip.has(guest) && listOfVip.get(guest) !== 0) {
            let newGuest = listOfVip.get(guest) - 1;
            listOfVip.set(guest, newGuest);
        }
        if (listOfVip.has(guest) && listOfVip.get(guest) === 0) {
            listOfVip.delete(guest);
        }
        if (listOfRegular.has(guest) && listOfRegular.get(guest) !== 0) {
            let newGuestt = listOfRegular.get(guest) - 1;
            listOfRegular.set(guest, newGuestt);
        }
        if (listOfRegular.has(guest) && listOfRegular.get(guest) === 0) {
            listOfRegular.delete(guest);
        }
    }
    let arrayOfListOfVip = Array.from(listOfVip);
    let arrayOfListOfRegular = Array.from(listOfRegular).sort((a,b) => a[0].localeCompare(b[0]));
    let result = [];
    for ([guest, num] of arrayOfListOfVip) {
        if (num > 1) {
            for (let i = 0; i < num; i++) {
                result.push(guest);
            }
        } else {
            result.push(guest);
        }
    }
    for ([guest, num] of arrayOfListOfRegular) {
        if (num > 1) {
            for (let i = 0; i < num; i++) {
                result.push(guest);
            }
        } else {
            result.push(guest);
        }
    }

    console.log(result.length);
    for (let guest of result) {
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