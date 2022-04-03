function bossRush(array) {
    let n = Number(array.shift());
    for (let i = 0; i < n; i++) {
        let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [a-zA-z]+)#/g;
        let str = array[i];
        let match = pattern.exec(str);
        while (match !== null) {
            console.log(`${match[1]}, The ${match[2]}`);
            console.log(`>> Strength: ${match[1].length}`);
            console.log(`>> Armor: ${match[2].length}`);
            match = pattern.exec(str);
        }
        if(!pattern.test(str)){
            console.log('Access denied!');
        }
    }
}
bossRush(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'])