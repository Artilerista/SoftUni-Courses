function aMinerTask(array) {
    let list = {};
    for (let i = 0; i < array.length; i += 2) {
        let resource = array[i];
        let quantity = Number(array[i + 1]);
        if (!list.hasOwnProperty(resource)) {
            list[resource] = quantity;
        } else {
            list[resource] += quantity;
        }
    }
    for (resource in list) {
        console.log(`${resource} -> ${list[resource]}`);
    }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
)