function makeDictionary(array) {
    let list = [];
    for (let element of array) {
        let currentObj = JSON.parse(element);
        for (let key of Object.keys(currentObj)) {
            let term = key;
            let definition = currentObj[key];
            if (list.find(x => x.Term === term)) {
                let currentTerm = list.find(x => x.Term === term);
                currentTerm.Definition = definition;
            } else {
                list.push({ Term: term, Definition: definition });
            }
        }
    }

    list.sort((a, b) => a.Term.localeCompare(b.Term));


    for (let element of list) {
        console.log(`Term: ${element.Term} => Definition: ${element.Definition}`);
    }

}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)