function newHouse(input) {
    let type = input[0];
    let flowers = Number(input[1]);
    let budget = Number(input[2]);
    let sum = 0;
    switch (type) {
        case 'Roses': sum = flowers * 5;
            if (flowers > 80) {
                sum = sum * 0.90;
            }
            break;
        case 'Dahlias': sum = flowers * 3.80;
            if (flowers > 90) {
                sum = sum * 0.85;
            }
            break;
        case 'Tulips': sum = flowers * 2.80;
            if (flowers > 80) {
                sum = sum * 0.85;
            }
            break;
        case 'Narcissus': sum = flowers * 3;
            if (flowers < 120) {
                sum = sum * 1.15;
            }
            break;
        case 'Gladiolus': sum = flowers * 2.50;
            if (flowers < 80) {
                sum = sum * 1.20;
            }
            break;
    }
    let diff = Math.abs(budget - sum);
    if(budget >= sum){
        console.log(`Hey, you have a great garden with ${flowers} ${type} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
newHouse(["Tulips",
"88",
"260"])


