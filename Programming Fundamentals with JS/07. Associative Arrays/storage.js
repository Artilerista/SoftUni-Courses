function storage(array) {
    let result = new Map;
    for (let element of array) {
        let [name, quantity] = element.split(' ');
        quantity = Number(quantity);
        if (!result.has(name)) {
            result.set(name, quantity);
        } else {
            let exist = result.get(name);
            result.set(name, quantity + exist);
        }
    }
    for (let [name, quantity] of result) {
        console.log(name, '->', quantity);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)