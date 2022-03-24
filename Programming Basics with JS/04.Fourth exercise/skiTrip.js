function skiTrip(input) {
    let days = Number(input[0]);
    let typeOfPlace = input[1];
    let grade = input[2];
    let sum = 0;
    let nights = days - 1;
    switch (typeOfPlace) {
        case 'room for one person':
            sum = nights * 18;
            break;
        case 'apartment':
            if (days < 10) {
                sum = (nights * 25) * 0.70;
            } else if (days <= 15) {
                sum = (nights * 25) * 0.65;
            } else {
                sum = (nights * 25) * 0.50;
            }
            break;
        case 'president apartment':
            if (days < 10) {
                sum = (nights * 35) * 0.90;
            } else if (days <= 15) {
                sum = (nights * 35) * 0.85;
            } else {
                sum = (nights * 35) * 0.80;
            }
            break;
    }
    if (grade === 'positive'){
        sum = sum * 1.25;
    } else {
        sum = sum * 0.90;
    }
    console.log(sum.toFixed(2));
}
skiTrip(["14",
    "apartment",
    "positive"])
