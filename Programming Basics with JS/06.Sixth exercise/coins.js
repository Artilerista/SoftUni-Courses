function coins(input) {
    let money = Number(input[0]);
    let moneyInSt =Math.trunc(money * 100);
    let counter = 0;
    while (moneyInSt > 0) {
        counter++;
        if (moneyInSt >= 200) {
            moneyInSt -= 200;
        } else if (moneyInSt >= 100) {
            moneyInSt -= 100
        } else if (moneyInSt >= 50) {
            moneyInSt -= 50
        } else if (moneyInSt >= 20) {
            moneyInSt -= 20
        } else if (moneyInSt >= 10) {
            moneyInSt -= 10
        } else if (moneyInSt >= 5) {
            moneyInSt -= 5
        } else if (moneyInSt >= 2) {
            moneyInSt -= 2
        } else if (moneyInSt >= 1) {
            moneyInSt -= 1
        }
    }
    console.log(counter);
}
coins(["2.73"])