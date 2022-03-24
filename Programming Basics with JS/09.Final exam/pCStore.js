function pCStore(input){
let priceInDollarsForProces = Number(input[0]);
let priceInDollarsForVGA = Number(input[1]);
let priceInDollarsForRam = Number(input[2]);
let countRam = Number(input[3]);
let pDiscount = Number(input[4]);
let proces = priceInDollarsForProces * 1.57;
let VGA = priceInDollarsForVGA * 1.57;
let PriceForOneRam = priceInDollarsForRam * 1.57;
let Ram = PriceForOneRam * countRam;
let FinalProcesor = proces - (proces * pDiscount);
let FinalVGA = VGA - (VGA * pDiscount);
let Finalsum = FinalProcesor + FinalVGA + Ram;
console.log(`Money needed - ${Finalsum.toFixed(2)} leva.`);
}
pCStore(["500",
"200",
"80",
"2",
"0.05"])
