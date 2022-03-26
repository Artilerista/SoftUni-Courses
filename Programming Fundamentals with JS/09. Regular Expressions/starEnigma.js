function starEnigma(array) {
    let num = Number(array.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let i = 0; i < num; i++) {
        let line = array[i];
        let count = line
        .toLocaleLowerCase()
        .split('')
        .filter(x => x === 's' || x === 't' || x === 'a' || x === 'r').length;
        let newWord = '';
        for (let char of line) {
            let currentChar = (char.charCodeAt() - count);
            let newChar = String.fromCharCode(currentChar);
            newWord += newChar;
        }

        let regex = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;
        let matchRegex = newWord.match(regex);
        if (matchRegex) {
            if (matchRegex[3] === 'A') {
                attackedPlanets.push(matchRegex[1]);
            } else if (matchRegex[3] === 'D') {
                destroyedPlanets.push(matchRegex[1]);
            }
        }

    }
    let sortedAttackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
    let sortedDestroyedPlanets = destroyedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${sortedAttackedPlanets.length}`);
    for (let planet of sortedAttackedPlanets) {
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${sortedDestroyedPlanets.length}`);
    for (let planet of sortedDestroyedPlanets) {
        console.log(`-> ${planet}`);
    }
}
starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']


)