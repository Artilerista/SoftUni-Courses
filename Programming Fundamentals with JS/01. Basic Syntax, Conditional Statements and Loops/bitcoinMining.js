function bitcoinMining(input) {
    let bouthBitcoins = 0;
    let daysCounter = 1;
    let money = 0;
    let days = 0;
    let bitCoin = 11949.16;
    let gold = 67.51;

    for (let index = 0; index < input.length; index++) {
        let grams = input[index];
        if(daysCounter % 3 === 0){
            grams-= 0.30 * grams
        }
        money += grams * gold;
        while(money >= bitCoin){
            bouthBitcoins++;
            money-= bitCoin;
            if(bouthBitcoins === 1)
            days+= daysCounter;
        }
        daysCounter++;
    }
    console.log(`Bought bitcoins: ${bouthBitcoins}`);
    if(bouthBitcoins >= 1){
    console.log(`Day of the first purchased bitcoin: ${days}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124])
bitcoinMining([100, 200, 300])