function race(array) {
    let names = array.shift();
    let pattern1 = /[A-Za-z]/g;
    let pattern2 = /\d/g;
    let list = {};
    for (let line of array) {
        if (line !== 'end of race') {

            let NameMatch = line.match(pattern1).join('');
            let NumMatch = line.match(pattern2);
            if (names.includes(NameMatch)) {
                let distance = 0;
                for (let num of NumMatch) {
                    distance += Number(num);
                }
                if (!list.hasOwnProperty(NameMatch)) {
                    list[NameMatch] = distance;
                } else {
                    list[NameMatch] += distance;
                }
            }
        }
    }
    let sorted = Object.entries(list).sort((a, b) => b[1] - a[1]);
    let top3 = [];
    for (let [name, num] of sorted) {
        top3.push(name);
    }
    console.log(`1st place: ${top3[0]} \n2nd place: ${top3[1]} \n3rd place: ${top3[2]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)