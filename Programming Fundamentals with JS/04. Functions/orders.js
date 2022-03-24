function orders(product, quantity) {
    let waterPrice = 1.00;
    let coffeePrice = 1.50
    let coke = 1.40;
    let snacks = 2.00;
    let totalPrice = 0;
    switch (product) {
        case 'water':
            totalPrice = waterPrice * quantity;
            break;
        case 'coffee':
            totalPrice = coffeePrice * quantity;
            break;
        case 'coke':
            totalPrice = coke * quantity;
            break;
        case 'snacks':
            totalPrice = snacks * quantity;
            break;
    }
    console.log(totalPrice.toFixed(2));
}
orders("water", 5)