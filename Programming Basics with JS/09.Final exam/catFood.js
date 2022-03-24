function catFood(input) {
    let cats = Number(input[0]);
    let index = 1;
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let totalGrams = 0;
    for (i = 1; i <= cats; i++) {
        let x = Number(input[index]);
        index++;
        if(x >= 100 && x <= 199){
            group1++;
            totalGrams+= x;
        } else if (x >= 200 && x <= 299){
            group2++;
            totalGrams+= x;
        } else if (x >= 300 && x <= 399){
            group3++;
            totalGrams+= x;
        }
    }
    let TotalKg = totalGrams / 1000;
    let PriceForFoodPerDay = TotalKg * 12.45;
    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${PriceForFoodPerDay.toFixed(2)} lv.`);
}
catFood(["6",
    "102",
    "236",
    "123",
    "399",
    "342",
    "222"])
