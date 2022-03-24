function shopping(input){
let budget = Number(input[0]);
let VGA = Number(input[1]);
let CPU = Number(input[2]);
let RAM = Number(input[3]);

let moneyForVGA = VGA * 250;
let moneyForCPU = (moneyForVGA * 0.35) * CPU;
let moneyForRAM = (moneyForVGA * 0.10) * RAM;
let price = moneyForVGA + moneyForCPU + moneyForRAM;
if(VGA > CPU){
    price = price * 0.85;
}
let diff = Math.abs(price - budget);
if (price <= budget){
    console.log(`You have ${diff.toFixed(2)} leva left!`);
} else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
}

}
shopping(["900",
"2",
"1",
"3"])
