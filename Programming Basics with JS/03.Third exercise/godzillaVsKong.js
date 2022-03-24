function godzillaVsKong(input){
let budget = Number(input[0]);
let extrasCount = Number(input[1]);
let clothCount = Number(input[2]);

let decor = budget * 0.10;
let moneyForCloths = extrasCount * clothCount;
if(extrasCount > 150){
    moneyForCloths = moneyForCloths * 0.90;
}
let totalPrice = moneyForCloths + decor;
let diff = Math.abs(totalPrice - budget);
if(totalPrice <= budget){
    console.log('Action!');
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
} else {
    console.log('Not enough money!');
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
}

}
godzillaVsKong(["20000",
"120",
"55.5"])
