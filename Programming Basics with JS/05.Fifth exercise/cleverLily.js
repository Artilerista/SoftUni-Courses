function cleverLily(input) {
    let ages = Number(input[0]);
    let priceMachine = Number(input[1]);
    let toyprice = Number(input[2]);
    let toys = 0;
    let moneyForBd = 0;
    let currentMoney = 10;
    for (i = 1; i <= ages; i++) {
        if (i % 2 === 0) {
            moneyForBd += currentMoney;
            currentMoney += 10;
            moneyForBd -= 1;
        } else {
            toys++
        }
    }
    let totalmoney = toys * toyprice + moneyForBd;
    let diff = Math.abs(totalmoney - priceMachine);
    if(totalmoney >= priceMachine){
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(["21",
"1570.98",
"3"])

