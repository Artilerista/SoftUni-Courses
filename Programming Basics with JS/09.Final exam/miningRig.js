function miningRig(input){
let VGAPrice = Number(input[0]);
let adapterPrice = Number(input[1]);
let electricForOneDay = Number(input[2]);
let moneyForOneDay = Number(input[3]);
let moneyForPeriferia = 1000;
let totalVGAPrice = VGAPrice * 13;
let totalAdapterPrice = adapterPrice * 13;
let totalSpendMoney = totalAdapterPrice + totalVGAPrice + moneyForPeriferia;
let profitForOneDay = moneyForOneDay - electricForOneDay;
let totalProfitForOneDay = profitForOneDay * 13;
let days = totalSpendMoney / totalProfitForOneDay ;
console.log(Math.ceil(totalSpendMoney));
console.log(Math.ceil(days));
}
miningRig(["700",
"15",
"0.20",
"2"])
