function garage(array) {
    let parking = {};
    for (let firstLine of array) {
        let [garage,secondLine] = firstLine.split(' - ');
        let tokens = secondLine.split(', ');
        console.log(secondLine)
        parking[garage];
    }
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])