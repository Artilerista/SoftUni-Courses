function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);
    let sum = 0;
    switch (season) {
        case 'Spring': sum = 3000;
            if (fisherman <= 6) {
                sum = sum * 0.90;
            } else if (fisherman >= 7 && fisherman <= 11) {
                sum = sum * 0.85;
            } else {
                sum = sum * 0.75;
            }
            break;
        case `Autumn`:
        case 'Summer': sum = 4200;
            if (fisherman <= 6) {
                sum = sum * 0.90;
            } else if (fisherman < 12) {
                sum = sum * 0.85;
            } else {
                sum = sum * 0.75;
            }
            break;
        case 'Winter': sum = 2600;
            if (fisherman <= 6) {
                sum = sum * 0.90;
            } else if (fisherman >= 7 && fisherman <= 11) {
                sum = sum * 0.85;
            } else {
                sum = sum * 0.75;
            }
            break;
    }
    if (fisherman % 2 === 0 && season !== 'Autumn') {
        sum = sum * 0.95;
    }
    let diff = Math.abs(budget - sum);
if (budget >= sum){
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
} else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
}
}
fishingBoat(["3600",
"Autumn",
"6"])

