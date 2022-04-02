function thePianist(array) {
    let n = Number(array.shift());
    let list = {};
    for (let i = 0; i < n; i++) {
        let line = array.shift();
        let [piece,composer,key] = line.split('|');
        list[piece] = {
            composer,
            key,
        }
    }
    while(array[0] !== 'Stop'){
        let tokens = array.shift().split('|');
        let command = tokens[0];
        let piece = tokens[1];
        let p1 = tokens[2];
        let p2 = tokens[3];
        let currentPiece = list[piece];
        if(command === 'Add'){
            if(!list.hasOwnProperty(piece)){
                list[piece] = {
                    composer: p1,
                    key: p2,
                }
                console.log(`${piece} by ${p1} in ${p2} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command === 'Remove'){
            if(list.hasOwnProperty(piece)){
                delete list[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey'){
            if(list.hasOwnProperty(piece)){
                currentPiece.key = p1;
                console.log(`Changed the key of ${piece} to ${p1}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    for (let [piece, obj] of Object.entries(list)) {
        console.log(`${piece} -> Composer: ${obj.composer}, Key: ${obj.key}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)