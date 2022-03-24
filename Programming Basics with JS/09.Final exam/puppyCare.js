function puppyCare(input) {
    let foodInKg = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let foodInGrams = foodInKg * 1000;
    let eatedGrams = 0;
    while (command !== 'Adopted') {
        let grams = Number(command);
        eatedGrams += grams;
        command = input[index];
        index++;
    }
    let diff = Math.abs(foodInGrams - eatedGrams);
    if (foodInGrams >= eatedGrams) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }
}
puppyCare(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])
