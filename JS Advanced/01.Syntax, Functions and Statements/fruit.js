function fruit(fruit, weigthInGrams, pricePerKg) {
    let weigthInKg = weigthInGrams / 1000;
    let price = weigthInKg * pricePerKg;
    console.log(`I need $${price.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)