function santasHoliday(input) {
    let days = Number(input[0]);
    let place = input[1];
    let grade = input[2];
    let nights = days - 1;
    let price = 0;
    switch (place) {
        case 'room for one person':
            price = nights * 18;
            break;
        case 'apartment':
            price = nights * 25;
            if (nights < 10) {
                price *= 0.70;
            } else if (nights <= 15) {
                price *= 0.65;
            } else if (nights > 15) {
                price *= 0.50;
            }
            break;
        case 'president apartment':
            price = nights * 35;
            if (nights < 10) {
                price *= 0.90;
            } else if (nights <= 15) {
                price *= 0.85;
            } else if (nights > 15) {
                price *= 0.80;
            }
            break;
    }
    if (grade === 'positive') {
        price *= 1.25;
    } else  {
        price *= 0.90;
    }
    console.log(price.toFixed(2));
}
santasHoliday(["30",
    "president apartment",
    "negative"])

