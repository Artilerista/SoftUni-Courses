function toyShop(input){
let excursion = Number(input[0]);
let puzzle = Number(input[1]);
let talkDoll = Number(input[2]);
let teddyBear = Number(input[3]);
let minions = Number(input[4]);
let truck = Number(input[5]);

let stokenumber = puzzle + talkDoll + teddyBear + minions + truck;
let price = puzzle * 2.60 + talkDoll * 3 + 
teddyBear * 4.10 + minions * 8.20 + truck * 2;

if (stokenumber >= 50){
    price = price * 0.75;
}
let totalprice = price * 0.90;
let diff = Math.abs(totalprice - excursion);

if(totalprice >= excursion){
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
} else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
}
}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])
