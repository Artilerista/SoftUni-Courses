function burgerBus(array) {
    let totalprofit = 0;
    let cities = array.shift();
    for (let i = 1; i <= cities; i++) {
        let currentCity = array.splice(0,3);
        let city = currentCity[0];
        let income = Number(currentCity[1]);
        let expenses = Number(currentCity[2]);
        if(i % 3 === 0 && i % 5 !== 0){
            expenses+= expenses * 0.50;
        } else if (i % 5 === 0){
            income-= income * 0.10;
        }
        let profitForCurrentCity = income - expenses;
        console.log(`In ${city} Burger Bus earned ${profitForCurrentCity.toFixed(2)} leva.`);
        totalprofit+= profitForCurrentCity;
    }
    console.log(`Burger Bus total profit: ${totalprofit.toFixed(2)} leva.`);

}
burgerBus((["3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"])
)